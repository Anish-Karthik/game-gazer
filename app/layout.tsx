import type { Metadata } from "next"
import { Inter } from "next/font/google"

import TRPCProvider from "./_trpc/Provider"
import "./globals.css"
import { auth } from "@/auth"
import ApolloClientProvider from "@/providers/apollo-client-provider"
import ReactQueryProvider from "@/providers/react-query-provider"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SessionProvider } from "next-auth/react"

import { appName } from "@/lib/constants"
import { ToastProvider } from "@/components/provider/toaster-provider"
import NavBar from "@/components/shared/navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: appName,
  description: "A place to review games",
  icons: [{ rel: "icon", url: "/logo.jpeg" }],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <ReactQueryProvider>
          <ApolloClientProvider>
            <TRPCProvider>
              <body className={inter.className}>
                <ToastProvider />
                <ReactQueryDevtools />
                {children}
              </body>
            </TRPCProvider>
          </ApolloClientProvider>
        </ReactQueryProvider>
      </html>
    </SessionProvider>
  )
}
