"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Edit2Icon } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Review, UpdateReviewDocument } from "@/lib/gql/graphql"
import { gqlClient } from "@/lib/service/client"
import { useCurrentUser } from "@/hooks/use-current-user"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Stars from "@/components/shared/ReactStars"

import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  rating: z
    .number()
    .min(1, {
      message: "Please enter a rating",
    })
    .max(5),
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
})

const UpdateReview = ({
  gameId,
  reviewId,
  content,
  rating,
}: {
  gameId: number
  reviewId: number
  content: string
  rating: number
}) => {
  const user = useCurrentUser()
  const queryClient = useQueryClient()
  const updateReview = useMutation({
    mutationFn: async (data: {
      reviewId: { id: number }
      input: {
        rating: number
        reviewText: string
        reviewDate: Date
      }
    }) =>
      await gqlClient.request(UpdateReviewDocument, {
        ...data,
      }),
    onError: (error) => {
      console.log(error)
    },
    onSuccess(data, variables, context) {
      const updateData = (oldData: { Review: Review[] }) => {
        console.log("oldData", oldData)
        const newData = data.update_Review_by_pk!
        return {
          ...oldData,
          Review: oldData.Review.map((review: Review) => {
            if (review.id === newData.id) {
              return newData
            }
            return review
          }),
        }
      }
      queryClient.setQueryData([`getGameReviews-${gameId}`, gameId], updateData)
      queryClient.setQueryData(
        [`getReviewsByUser-${user!.id}`, user!.id],
        updateData
      )
    },
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating,
      content,
    },
  })
  const { isValid } = form.formState
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values)
    try {
      await updateReview.mutateAsync({
        reviewId: { id: reviewId },
        input: {
          rating: values.rating,
          reviewText: values.content,
          reviewDate: new Date(),
        },
      })
      console.log("Updated review successfully!")
      form.reset()
    } catch (error) {
      console.log(error)
    }
    console.log(values)
  }
  console.log("rating", isValid)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <Edit2Icon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Review</DialogTitle>
          <DialogDescription>
            Anyone will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Stars
                      // @ts-ignore
                      value={field.value}
                      onChange={(rating: number) => {
                        return field.onChange(rating)
                      }}
                      size={40}
                      half={false}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="This game is.." {...field} />
                  </FormControl>
                  <FormDescription>This is your public review.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button type="submit" disabled={!isValid}>
                Edit
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateReview
