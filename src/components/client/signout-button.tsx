"use client"
import { signOut } from "next-auth/react"
 
export function SignOutClientCom() {
  return <button onClick={() => signOut()}>Sign Out Client com</button>
}