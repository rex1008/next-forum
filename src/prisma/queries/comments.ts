import { Comment } from "@prisma/client";
import { prisma } from "..";
import { cache } from "react";

export type CommentWithUser = {
  user: {
    name: string | null;
    image: string | null;
  } | null;
} & Comment;

export const fetchCommentsByPostId = cache(
  (postId: string | null): Promise<CommentWithUser[]> => {
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
);
