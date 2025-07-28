"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import type { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10).max(4747),
});

export async function createPost(
  name: string,
  prevState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const title = formData.get("title");
  const content = formData.get("content");

  const result = createPostSchema.safeParse({
    title,
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

  const topic = await prisma.topic.findFirst({
    where: {
      name,
    },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find topic."],
      },
    };
  }

  let post: Post;
  try {
    post = await prisma.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id!,
        topicId: topic.id,
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

  revalidatePath("/");
  redirect(`/topics/${topic.name}/posts/${post.id}`);

  // return {
  //   errors: {}
  // }
}
