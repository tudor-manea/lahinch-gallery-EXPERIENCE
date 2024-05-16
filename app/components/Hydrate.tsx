"use client"

import { ReactNode, useEffect, useState } from "react"

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <>{children}</> : <div className="
  w-sreen h-screen flex justify-center items-center text-4xl 
  font-bold">Loading...</div>}</>
}

