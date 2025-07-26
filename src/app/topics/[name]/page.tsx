import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicName } from "@/prisma/queries/posts";
import React from "react";

export default async function TopicShowPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  const posts = await fetchPostsByTopicName(name)
  return (
    <div className="flex justify-between">
      <div className="w-3/5">
        <h1 className="text-xl mt-2">{name}</h1>
        <PostList posts={posts} />
      </div>
      <div>
        <PostCreateForm name={name} />
      </div>
    </div>
  );
}
