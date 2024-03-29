"use client"

import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

import { GetAllReviewsByUserDocument } from "@/lib/gql/graphql"
import { gqlClient } from "@/lib/service/client"
import { useCurrentUser } from "@/hooks/use-current-user"
import { Skeleton } from "@/components/ui/skeleton"
import ReviewCard from "@/components/cards/review-card"
import DisplayGameCard from "@/components/shared/display-game-card"

const MyReviews = () => {
  const user = useCurrentUser()
  const router = useRouter()
  const { data, isLoading, error } = useQuery({
    queryKey: [`getReviewsByUser-${user!.id}`, user!.id],
    queryFn: async () => {
      const { Review } = user
        ? await gqlClient.request(GetAllReviewsByUserDocument, {
            userId: user.id,
          })
        : { Review: [] }
      return { Review: Review }
    },
    // refetchInterval: 1000,
  })

  console.log(data)
  if (!user?.id) {
    router.push("/")
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between gap-2 max-sm:flex-col max-sm:justify-center">
            <div>
              <h1 className="text-2xl font-bold">My Reviews</h1>
              <p className="text-sm">{data?.Review.length} reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {!data?.Review?.length && <p>No reviews yet</p>}
        {isLoading &&
          new Array(3).fill(null).map((_, ind) => (
            <div className="flex w-full flex-col gap-2">
              <Skeleton key={ind} className="h-60 w-full" />
              <Skeleton key={ind} className="h-36 w-full" />
            </div>
          ))}
        {data?.Review?.map((review) => (
          <div className="flex flex-col gap-2 rounded-lg p-2 shadow-md">
            <DisplayGameCard gameId={review.Game.id} />
            <ReviewCard
              gameId={review.Game.id}
              key={review.id}
              reviewId={review.id}
              authorImage={review.User.image || "https://picsum.photos/200"}
              authorName={review.User.name!}
              content={review.reviewText!}
              rating={review.rating}
              isEditable={true}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyReviews
