import React from "react"

import { GetGameDocument } from "@/lib/gql/graphql"
import { gqlClient } from "@/lib/service/client"
import GameForm from "@/components/shared/game-form"

const page = async ({ params: { id: gameId } }: { params: { id: number } }) => {
  const gameDetails = await gqlClient.request(GetGameDocument, {
    gameId,
  })
  return <GameForm prevData={gameDetails.Game_by_pk as any} />
}

export default page
