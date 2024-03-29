"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Trash2Icon } from "lucide-react"

import { DeleteReviewDocument, Review } from "@/lib/gql/graphql"
import { gqlClient } from "@/lib/service/client"
import { useCurrentUser } from "@/hooks/use-current-user"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const DeleteReview = ({
  reviewId,
  gameId,
}: {
  reviewId: number
  gameId: number
}) => {
  const user = useCurrentUser()
  const queryClient = useQueryClient()
  const deleteReview = useMutation({
    mutationFn: async ({ reviewId }: { reviewId: number }) =>
      await gqlClient.request(DeleteReviewDocument, {
        reviewId,
      }),
    onError: (error) => {
      console.log(error)
    },
    onSuccess(data, variables, context) {
      const deleteData = (oldData: { Review: Review[] }) => {
        const newData = data!.delete_Review_by_pk!
        const newReviews = oldData!.Review.filter(
          (review) => review.id !== newData.id
        )
        return {
          ...oldData,
          Review: newReviews,
        }
      }
      queryClient.setQueryData([`getGameReviews-${gameId}`, gameId], deleteData)
      queryClient.setQueryData(
        [`getReviewsByUser-${user!.id}`, user!.id],
        deleteData
      )
    },
  })
  // const [deleteReview] = useDeleteReviewMutation({
  //   refetchQueries: [GetAllReviewsForGameDocument],
  //   update: (cache, { data }) => {
  //     const newData = data!.delete_Review_by_pk!
  //     const oldData = cache.readQuery({ query: GetAllReviewsForGameDocument })
  //     const newReviews = oldData!.Review.filter(
  //       (review) => review.id !== newData.id
  //     )
  //     cache.writeQuery({
  //       query: GetAllReviewsForGameDocument,
  //       data: {
  //         Review: newReviews,
  //       },
  //     })
  //   },
  // })

  // 2. Define a submit handler.
  async function onSubmit() {
    try {
      await deleteReview.mutateAsync({
        reviewId,
      })
      console.log("Deleted review successfully!")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <Trash2Icon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Review</DialogTitle>
          <DialogDescription>
            Are You sure you want to delete this review?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={onSubmit}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteReview
