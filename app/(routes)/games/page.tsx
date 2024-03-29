"use client"

import React from "react"
import { Game } from "@prisma/client"

import { useGetAllGamesQuery } from "@/lib/graphql/generated/types-and-hooks"
import { Skeleton } from "@/components/ui/skeleton"
import GameCard from "@/components/cards/game"

const Page = () => {
  const { data: games, loading, error } = useGetAllGamesQuery()

  return (
    <main className="grid h-full w-full grid-cols-1 gap-2 to-[#15162c] text-black sm:grid-cols-2 md:grid-cols-3">
      {loading &&
        new Array(6)
          .fill(null)
          .map((_, ind) => (
            <Skeleton key={ind} className="h-72 w-full rounded-md" />
          ))}
      {games?.Game.map((game) => (
        <GameCard key={game.id} game={game as any} />
      ))}
    </main>
  )
}

export default Page
