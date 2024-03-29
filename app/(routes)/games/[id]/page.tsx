import { redirect } from "next/navigation"

import AddReview from "@/components/shared/AddReview"

import "@/hooks/use-current-user"
import { currentUser } from "@/lib/auth"
import { GetGameDocument } from "@/lib/gql/graphql"
import { gqlClient } from "@/lib/service/client"

import GameCard from "./_components/detailed-game-card"
import GetAllReviews from "./_components/get-all-reviews"

const Game = async ({ params }: { params: { id: Number } }) => {
  const user = await currentUser()
  const gameId = Number(params.id)
  const data = await gqlClient.request(GetGameDocument, {
    gameId,
  })

  if (!user) {
    redirect("/auth/login")
  }
  if (!data || !data.Game_by_pk || !data.Game_by_pk.Reviews) {
    return <p>Game not found</p>
  }

  return (
    <div className="flex flex-col gap-8">
      <GameCard
        name={data.Game_by_pk.title}
        description={data.Game_by_pk.description!}
        image={data.Game_by_pk.image!}
        genre={data.Game_by_pk.genre!}
        platform={data.Game_by_pk.platform}
        company={data.Game_by_pk.developer!}
        review={
          (data.Game_by_pk.Reviews.reduce(
            (acc, review) => acc + review.rating,
            0
          ) || 0) / (data.Game_by_pk.Reviews.length || 1)
        }
        totalReviews={data.Game_by_pk!.Reviews?.length}
        view="horizontal"
      />
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between gap-2 max-sm:flex-col max-sm:justify-center">
          <div>
            <h1 className="text-2xl font-bold">Reviews</h1>
            <p className="text-sm">{data.Game_by_pk.Reviews.length} Reviews</p>
          </div>
          <div className="flex flex-col gap-2">
            <div>Add your Review</div>
            <AddReview gameId={gameId!} authorId={user.id!} />
          </div>
        </div>

        <GetAllReviews gameId={gameId} userId={user.id} />
      </div>
    </div>
  )
}

export default Game
