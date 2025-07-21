"use client"

import { useSession } from 'next-auth/react'

export default function UserInfoClientCom() {
  const { data: session } = useSession()
 
  if (!session?.user) return null
 
  return (
    <div>
      <p>{JSON.stringify(session.user)}</p>
      <img src={session.user.image || "https://i.pravatar.cc/150?u=a042581f4e29026024d"} alt="User Avatar" />
    </div>
  )
}