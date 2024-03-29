import Image from "next/image"
import { ActivityIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const GameCard = ({
  name,
  description,
  image,
  genre,
  platform,
  company,
  view = "horizontal",
  review: avgReview,
  totalReviews,
}: {
  name: string
  description: string
  image: string
  genre: string
  platform: string[]
  company: string
  view?: "vertical" | "horizontal"
  review: number
  totalReviews: number
}) => {
  return (
    <div className="h-full rounded-lg bg-gray-100 p-4">
      <div
        className={cn(
          "flex gap-2 max-sm:flex-col",
          view === "vertical" ? "flex-col" : ""
        )}
      >
        <Image
          src={image}
          alt={name}
          width={600}
          height={400}
          className={cn(
            "h-96 w-full rounded-lg ",
            view === "horizontal" ? "sm:h-72" : "h-96"
          )}
        />
        <div className={cn("flex h-full flex-col justify-between")}>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex flex-col gap-3 font-semibold">
            <p>Genre: ${genre}</p>
            <p>
              Platforms:{" "}
              {platform.map((p, i) => (
                <span key={i + p} className="mx-1 rounded-md bg-slate-300 px-1">
                  {p}
                </span>
              ))}
            </p>
            <p>Company: {company}</p>
          </div>
          {
            <div className="mt-5 flex flex-col">
              <p>
                Avg Reviews: {Math.floor(avgReview)}.
                {Math.round((avgReview - Math.floor(avgReview)) * 10)}⭐
              </p>
              <div className="flex items-center gap-1">
                <p>Total Reviews: {totalReviews}</p>
                <ActivityIcon className="text-yellow-400" />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default GameCard
