import React from "react"

import { useGetGameQuery } from "@/lib/graphql/generated/types-and-hooks"
import GameCard from "@/app/(routes)/games/[id]/_components/detailed-game-card"

import { Skeleton } from "../ui/skeleton"

const DisplayGameCard = ({ gameId }: { gameId: number }) => {
  const { data, loading, error } = useGetGameQuery({
    variables: {
      gameId,
    },
  })
  if (loading || !data?.Game_by_pk) return <Skeleton className="h-72 w-full" />
  const game = data.Game_by_pk
  return (
    <GameCard
      totalReviews={game.Reviews.length!}
      review={game.averageRating}
      key={game.id}
      name={game.title}
      description={game.description!}
      image={game.image!}
      genre={game.genre!}
      platform={game.platform}
      company={game.developer!}
    />
  )
}

export default DisplayGameCard
