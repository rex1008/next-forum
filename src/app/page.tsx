import React from "react";
import SignButton from "@/components/sign-button";
import { auth } from "@/auth";
import SignOutButton from "@/components/signout-button";
import { Button } from "@nextui-org/react";

export default async function Page() {
  const session = await auth();
  return (
    <>
      <div>{session?.user ? JSON.stringify(session.user) : "未登录"}</div>
      <SignButton />
      <SignOutButton />
      <Button color="primary">Click me</Button>
    </>
  );
}