import Image from "next/image"
import { StarIcon } from "lucide-react"

import DeleteReview from "../shared/DeleteReview"
import UpdateReview from "../shared/UpdateReview"
import { Button } from "../ui/button"

const limit = 300

const ReviewCard = ({
  gameId,
  reviewId,
  authorName,
  authorImage,
  rating,
  content,
  isEditable = false,
  date,
}: {
  gameId: number
  reviewId: number
  authorName: string
  authorImage: string
  rating: number
  content: string
  isEditable?: boolean
  date?: string
}) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border p-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <Image
            src={authorImage}
            alt={authorName}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl font-bold">{authorName}</h1>
        </div>
        {isEditable && (
          <div className="flex items-center gap-2">
            <UpdateReview
              gameId={gameId}
              content={content}
              rating={rating}
              reviewId={reviewId}
            />
            <DeleteReview reviewId={reviewId} gameId={gameId} />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            {new Array(rating).fill(0).map((_, index) => (
              <span key={index} className="text-2xl">
                ⭐
              </span>
            ))}
            {new Array(5 - rating).fill(0).map((_, index) => (
              <StarIcon
                key={index}
                className="ml-[0.4rem] mr-[0.1rem] mt-[0.125rem] text-yellow-500"
              />
            ))}
          </div>
        </div>
        <div className="px-2">
          <p className="line-clamp-3 text-lg">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard

//  <div className="px-2">
//           <p className="text-lg line-clamp-3">
//             <p className="text-lg">
//               {content.slice(0, limit)}...
//               {
//                 <Button
//                   variant={"ghost"}
//                   className="!p-0 hover:bg-transparent -mt-3"
//                   onClick={() => setShow(true)}
//                 >
//                   Read more{" "}
//                 </Button>
//               }
//             </p>
//           )}
//           {(content.length <= limit || show) && (
//             <p className="text-lg">{content}</p>
//           )}
//         </div>
