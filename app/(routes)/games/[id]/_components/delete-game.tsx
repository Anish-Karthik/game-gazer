"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { Trash2 } from "lucide-react"
import toast from "react-hot-toast"

import { GetAllGamesDocument } from "@/lib/gql/graphql"
import { useDeleteGameMutation } from "@/lib/graphql/generated/types-and-hooks"

const DeleteGame = ({ gameId }: { gameId: number }) => {
  const router = useRouter()
  const [deleteGame] = useDeleteGameMutation({
    update: (cache, { data }) => {
      const oldData = cache.readQuery({ query: GetAllGamesDocument })
      if (!oldData) return
      const newGames = oldData.Game.filter((game) => game.id !== gameId)
      cache.writeQuery({
        query: GetAllGamesDocument,
        data: { Game: newGames },
      })
    },
  })
  return (
    <button
      className="h-full w-full rounded-md p-1 text-red-600 hover:bg-white/70"
      onClick={async () => {
        await deleteGame({ variables: { gameId } })
        toast.success("Game Deleted")
        router.push("/games")
      }}
    >
      <Trash2 size={20} />
    </button>
  )
}

export default DeleteGame
