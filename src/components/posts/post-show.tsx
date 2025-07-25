import { prisma } from '@/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

interface PostShowProps {
  postId: string
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await prisma.post.findFirst({
    where: {
      id: postId
    }
  })
  if (!post) {
    notFound()
  }
  return (
    <div>
      <h1 className='text-2xl font-bold my-2'>{post.title}</h1>
      <p className='p-4 border rounded'>{post.content}</p>
    </div>
  )
}
