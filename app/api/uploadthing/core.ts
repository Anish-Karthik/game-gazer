import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError } from "uploadthing/server"

import { currentUser } from "@/lib/auth"

const f = createUploadthing()
const handleAuth = async () => {
  const user = await currentUser()

  if (!user) {
    throw new Error("Authentication error: User user not found.")
  }

  return { userId: user.id }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId)

      console.log("file url", file.url)

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId, url: file.url }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
