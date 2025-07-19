import React from "react";
import SignButton from "@/components/sign-button";
import { auth } from "@/auth";
import SignOutButton from "@/components/signout-button";

export default async function Page() {
  const session = await auth();
  return (
    <>
      <div>{session?.user ? JSON.stringify(session.user) : "未登录"}</div>
      <SignButton />
      <SignOutButton />
    </>
  );
}