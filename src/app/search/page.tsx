import { redirect } from 'next/navigation'
import React from 'react'

interface SearchPageProps {
  searchParams: Promise<{ pnameorcon: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { pnameorcon } = await searchParams
  if (!pnameorcon) {
    redirect("/")
  }
  return (
    <div>
      {pnameorcon}
    </div>
  )
}
