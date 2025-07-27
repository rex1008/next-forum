import {
  CommentWithUser,
  fetchCommentsByPostId,
} from "@/prisma/queries/comments";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import CommentCreateForm from "./comment-create-form";

export default async function CommentShow({
  comment,
}: {
  comment: CommentWithUser;
}) {
  const comments = await fetchCommentsByPostId(comment.postId);
  return (
    <div className="border mt-2 p-4 rounded dark:border-purple-600">
      <div className="flex gap-3">
        <Image
          src={comment.user?.image || "/avatar.png"}
          alt="User Avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">
            {comment.user?.name}
          </p>
          <p className="flex justify-between items-center">
            <span className="flex-1 text-gray-900">{comment.content}</span>
            <span className="w-[150px] text-right text-gray-400 text-sm">
              {dayjs(comment.createdAt).format("YYYY/M/D H:m:s")}
            </span>
          </p>

          <CommentCreateForm
            postId={comment.postId}
            isOpen={false}
            parentId={comment.id}
          />
        </div>
      </div>
      <div className="pl-12">
        {comments
          .filter((c) => c.parentId === comment.id)
          .map((c) => {
            return <CommentShow key={c.id} comment={c} />;
          })}
      </div>
    </div>
  );
}
