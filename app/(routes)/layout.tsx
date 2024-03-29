import React from "react"

import NavBar from "@/components/shared/navbar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-ful h-full">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8">
          <NavBar />
          <div className="h-full w-full pt-[4.5rem]">{children}</div>
        </div>
      </div>
    </main>
  )
}

export default layout
