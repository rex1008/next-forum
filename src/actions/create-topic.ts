"use server"

import { auth } from '@/auth'
import { prisma } from '@/prisma'
import type { Topic } from '@prisma/client'
import { redirect } from 'next/navigation'
import { z } from 'zod'

interface CreateTopicFormState {
  errors: {
    name?: string[],
    description?: string[],
    _form?: string[]
  }
}

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-zA-Z0-9_]+$/, {
    message: "Name can contain only letters, numbers, and underscores"
  }),
  description: z.string().min(10).max(4747)
})

export async function createTopic(prevState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
  const name = formData.get("name")
  const description = formData.get("description")

  const result = createTopicSchema.safeParse({
    name,
    description
  })
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  const session = await auth()
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must sign in first."]
      }
    }
    
  }

  console.log("user id in session", session.user.id)

  let topic: Topic
  try {
    topic = await prisma.topic.create({
      data: {
        name: result.data.name,
        description: result.data.description,
        userId: session.user.id!
      }
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      } 
    } else {
      return {
        errors: {
          _form: ["Something went wrong."]
        }
      }
    }
  }

  redirect(`/topics/${topic.name}`)

  // return {
  //   errors: {}
  // }
}