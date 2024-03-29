"use client"

import Image from "next/image"
import Link from "next/link"
import { Game, Review } from "@prisma/client"
import { format } from "date-fns"

const GameCard = ({ game }: { game: Game & { Reviews: Review[] } }) => {
  return (
    <Link
      href={`/games/${game.id}`}
      key={game.id}
      className="h-72 w-full rounded-md bg-white"
    >
      <Image
        src={game.image || "https://picsum.photos/200"}
        alt={game.title}
        width={200}
        height={800}
        className="h-44 w-full rounded-t-md object-cover"
      />
      <div className="rounded-b-md border-x border-b p-4">
        <h3 className="text-xl font-bold">{game.title}</h3>
        <p className="max-h-10 max-w-full truncate text-sm">
          {game.description}
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <p className="rounded-md bg-slate-300 px-1 text-sm font-bold">
              {game.developer}
            </p>
            <p className="rounded-md bg-slate-300 p-1 text-xs font-bold">
              {format(game.releaseDate!, "MM/yyyy")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">{game.Reviews?.length} reviews</p>
            <p className="ml-2 text-sm font-bold">
              {(game.Reviews.reduce((acc, review) => acc + review.rating, 0) ||
                0) / (game.Reviews.length || 1) || 0}
              ⭐
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GameCard
