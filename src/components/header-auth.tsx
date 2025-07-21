"use client"

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import * as actions from '@/actions'
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const { data: session} = useSession()
  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar
            src={
              session.user.image ||
              "https://avatars.githubusercontent.com/u/207756783?v=4"
            }
          />
        </PopoverTrigger>
        <PopoverContent>
          <form
            className="p-4"
            action={actions.signOut}
          >
            <Button type="submit">退出</Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem className="hidden lg:flex">
          <form
            action={actions.signIn}
          >
            <Button type="submit" color="secondary" href="#" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form
            action={actions.signIn}
          >
            <Button type="submit" color="secondary" href="#">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent
}
