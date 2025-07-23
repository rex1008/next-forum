import PostCreateForm from "@/components/posts/post-create-form";
import React from "react";

export default async function TopicShowPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl mt-2">{name}</h1>
      </div>
      <div>
        <PostCreateForm/>
      </div>
    </div>
  );
}
