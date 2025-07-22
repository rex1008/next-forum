"use server"

import { auth } from '@/auth'
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

  return {
    errors: {}
  }
}