import PostList from "@/components/posts/post-list";
import { fetchPostByPnameorcon } from "@/prisma/queries/posts";
import { redirect } from "next/navigation";
import React from "react";

interface SearchPageProps {
  searchParams: Promise<{ pnameorcon: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { pnameorcon } = await searchParams;
  if (!pnameorcon) {
    redirect("/");
  }
  const posts = await fetchPostByPnameorcon(pnameorcon);
  return <PostList posts={posts} />;
}
