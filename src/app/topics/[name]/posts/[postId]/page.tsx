import PostShow from "@/components/posts/post-show";
import PostShowLoading from "@/components/posts/post-show-loading";
import React, { Suspense } from "react";

interface PostShowPageProps {
  params: {
    name: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { postId } = await params;
  return (
    <Suspense fallback={<PostShowLoading />}>
      <PostShow postId={postId} />
    </Suspense>
  );
}
