import React from "react";
import CommentShow from "./comment-show";
import { fetchCommentsByPostId } from "@/prisma/queries/comments";

interface CommentListProps {
  postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);
  const topLevelComments = comments.filter(comment => comment.parentId === null)
  return (
    <div className="space-y-3 pb-12 !mt-8">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {topLevelComments.map((comment) => {
        return <CommentShow key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
