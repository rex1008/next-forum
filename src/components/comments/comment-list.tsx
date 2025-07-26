import React from "react";
import CommentShow from "./comment-show";
import { fetchCommentsByPostId } from "@/prisma/queries/comments";

interface CommentListProps {
  postId: string
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId)
  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All 20 comments</h1>
      {
        comments.map(comment => {
          return <CommentShow key={comment.id} comment={comment} />
        })
      }
    </div>
  );
}
