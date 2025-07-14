'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function ScrollToHash() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // wait a tick so the element exists
    setTimeout(() => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.substring(1)
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 0)
  }, [pathname, searchParams.toString()])

  return null
}
