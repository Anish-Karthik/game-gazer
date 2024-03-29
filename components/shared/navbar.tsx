"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Role } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"

import { appName } from "@/lib/constants"
import { GetUserRoleDocument } from "@/lib/gql/graphql"
import { gqlClient } from "@/lib/service/client"
import { cn } from "@/lib/utils"
import { useCurrentUser } from "@/hooks/use-current-user"
import { Button } from "@/components/ui/button"

import { LoginButton } from "../auth/login-button"
import { LogoutButton } from "../auth/logout-button"

const routes = [
  {
    name: "Games",
    path: "/games",
  },
  {
    name: "My Reviews",
    path: "/my-reviews",
  },
  {
    name: "Add Game",
    path: "/add-game",
  },
]

const NavBar = () => {
  const currentRoute = usePathname()
  const user = useCurrentUser()
  const { data: userRole } = useQuery({
    queryKey: ["userRole"],
    queryFn: async () =>
      user
        ? ((await gqlClient.request(GetUserRoleDocument, { userId: user.id }))
            .User_by_pk!.role as Role)
        : "USER",
  })
  console.log(userRole)
  return (
    <nav className="fixed inset-x-0 mx-auto w-full max-w-5xl bg-white">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <div className="rounded-md bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            <Link href="/">{appName}</Link>
          </div>
        </div>
        <div className="hidden md:flex">
          {routes.map((route, index) =>
            userRole !== "ADMIN" && index === 2 ? null : (
              <Link
                key={index}
                href={route.path}
                className={cn(
                  "rounded-md px-4 py-2 font-medium text-gray-800",
                  currentRoute.includes(route.path)
                    ? "bg-gray-200 text-yellow-700"
                    : "hover:text-yellow-500"
                )}
              >
                {route.name}
              </Link>
            )
          )}
        </div>
        <div className="flex items-center gap-2">
          {!user ? (
            <LoginButton>
              <Button
                variant={"outline"}
                className="border-yellow-500 text-yellow-500 hover:border-yellow-700 hover:text-yellow-700 "
              >
                Login
              </Button>
            </LoginButton>
          ) : (
            <LogoutButton>
              <Button
                variant={"outline"}
                className="border-yellow-500 text-yellow-500 hover:border-yellow-700 hover:text-yellow-700 "
              >
                Logout
              </Button>
            </LogoutButton>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
