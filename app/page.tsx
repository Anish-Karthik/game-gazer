"use client"

import Link from "next/link"

import { useCurrentUser } from "@/hooks/use-current-user"
import { trpc } from "@/app/_trpc/client"

export default function Home() {
  const hello = trpc.test.useQuery()
  const user = useCurrentUser()
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          Upgraded
        </h1>
        <h1 className="!text-3xl font-extrabold tracking-tight sm:text-[5rem]">
          Upgraded by{" "}
          <span className="text-[hsl(280,100%,70%)]">
            <Link href="https://github.com/Anish-Karthik">Anish Karthik</Link>
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://github.com/Anish-Karthik/create-t3-app-upgraded"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://github.com/Anish-Karthik/create-t3-app-upgraded/readme.md"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {!hello.isLoading ? hello.data?.message : "Loading tRPC query..."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {user && <span>Logged in as {user?.name}</span>}
            </p>
            <Link
              href={user ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {user ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
