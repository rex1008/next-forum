import { Comment } from "@prisma/client";
import { prisma } from "..";

export type CommentWithUser = {
  user: {
    name: string | null;
    image: string | null;
  } | null;
} & Comment;

export function fetchCommentsByPostId(
  postId: string | null
): Promise<CommentWithUser[]> {
  return prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
