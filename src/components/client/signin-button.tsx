"use client"
import { signIn } from "next-auth/react"
 
export function SignInClientCom() {
  return (
    <button onClick={() => signIn("github")}>
      Sign In Client com
    </button>
  )
}