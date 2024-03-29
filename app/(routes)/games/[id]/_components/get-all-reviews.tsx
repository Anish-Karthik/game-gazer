"use client"

import { useQuery } from "@tanstack/react-query"

import { GetAllReviewsForGameDocument } from "@/lib/gql/graphql"
import { gqlClient } from "@/lib/service/client"
import { Skeleton } from "@/components/ui/skeleton"
import ReviewCard from "@/components/cards/review-card"

const getAllReviews = async ({ queryKey }: { queryKey: [string, number] }) => {
  const gameId = queryKey[1]
  const { Review } = await gqlClient.request(GetAllReviewsForGameDocument, {
    gameId,
  })
  return { Review: Review! }
}

const GetAllReviews = ({
  gameId,
  userId,
}: {
  gameId: number
  userId: string
}) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`getGameReviews-${gameId}`, gameId],
    queryFn: getAllReviews,
  })
  return (
    <div className="flex flex-col gap-3">
      {isLoading && <Skeleton className="h-40 w-full" />}
      {reviews?.Review.map((review) => (
        <ReviewCard
          gameId={gameId}
          key={review.id}
          reviewId={review.id}
          authorName={review.User.name!}
          authorImage={review.User.image || "https://picsum.photos/200"}
          rating={review.rating}
          content={review.reviewText!}
          date={review.reviewDate}
          isEditable={review.User.id === userId}
        />
      ))}
    </div>
  )
}

export default GetAllReviews
