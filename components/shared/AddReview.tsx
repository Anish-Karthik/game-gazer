"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { CreateReviewDocument, Review } from "@/lib/gql/graphql"
import { gqlClient } from "@/lib/service/client"
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

import { Textarea } from "../ui/textarea"
import Stars from "./ReactStars"

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

const AddReview = ({
  gameId,
  authorId,
}: {
  gameId: number
  authorId: string
}) => {
  const queryClient = useQueryClient()
  const addReview = useMutation({
    mutationFn: async (data: {
      input: {
        userId: string
        reviewText: string
        gameId: number
        rating: number
        reviewDate: Date
      }
    }) =>
      await gqlClient.request(CreateReviewDocument, {
        ...data,
      }),
    onError: (error) => {
      console.log(error)
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData(
        [`getGameReviews-${gameId}`, gameId],
        (oldData: { Review: Review[] }) => {
          const newData = data!.insert_Review_one!
          const newReviews = [newData, ...oldData!.Review]
          return {
            ...oldData,
            Review: newReviews,
          }
        }
      )
    },
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 5,
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addReview.mutateAsync({
        input: {
          userId: authorId,
          reviewText: values.content,
          gameId: gameId,
          rating: values.rating,
          reviewDate: new Date(),
        },
      })
      form.reset()
    } catch (error) {
      console.log(error)
    }
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Review</DialogTitle>
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
              <Button type="submit" disabled={!authorId || !gameId}>
                Submit
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddReview
