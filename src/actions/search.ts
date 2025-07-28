"use server";

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const pnameorcon = formData.get("pnameorcon");
  if (!pnameorcon || typeof pnameorcon !== "string") {
    redirect("/");
  }
  redirect(`/search?pnameorcon=${pnameorcon}`);
}
