import React from "react";
import SignButton from "@/components/sign-button";
import { auth } from "@/auth";
import SignOutButton from "@/components/signout-button";
import { Button } from "@nextui-org/react";
import UserInfo from "@/components/user-info";
import { SignInClientCom } from "@/components/client/signin-button";
import { SignOutClientCom } from "@/components/client/signout-button";
import UserInfoClientCom from "@/components/client/user-info";

export default async function Page() {
  const session = await auth();
  return (
    <>
      <div>{session?.user ? <UserInfo/> : "未登录"}</div>
      <SignButton />
      <SignOutButton />
      <br />
      <br />
      {/* <Button color="primary">Click me</Button> */}
      <SignInClientCom/>
      <br />
      <SignOutClientCom/>
      <UserInfoClientCom/>
    </>
  );
}