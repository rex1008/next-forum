import Image from "next/image"
import { auth } from "../auth"

export default async function UserInfo() {
  const session = await auth()

  if (!session?.user) return null

  return (
    <div>
      <p>{JSON.stringify(session.user)}</p>
      <Image src={session.user.image || "https://i.pravatar.cc/150?u=a042581f4e29026024d"} alt="User Avatar" />
    </div>
  )
}