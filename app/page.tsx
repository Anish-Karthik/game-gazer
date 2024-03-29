import Link from "next/link"
import { redirect } from "next/navigation"

import { useCurrentUser } from "@/hooks/use-current-user"
import { trpc } from "@/app/_trpc/client"

export default function Home() {
  redirect("/games")
  return (
    <main className="flex h-full w-full flex-col items-center justify-center to-[#15162c] text-black"></main>
  )
}
