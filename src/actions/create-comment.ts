"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { z } from "zod";

interface CreateCommentFormState {
  errors: {
    content?: string[];
    _form?: string[];
  };
}

const createCommentSchema = z.object({
  content: z.string().min(10).max(4747),
});

export async function createComment(
  { postId }: { postId: string },
  prevState: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> {
  const content = formData.get("content");

  const result = createCommentSchema.safeParse({
    content,
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must sign in first."],
      },
    };
  }

  try {
    await prisma.comment.create({
      data: {
        content: result.data.content,
        userId: session.user.id!,
        postId
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong."],
        },
      };
    }
  }

  return {
    errors: {}
  }
}
