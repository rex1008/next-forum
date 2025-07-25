import React from 'react'

interface PostShowPageProps {
  params: {
    name: string,
    postId: string
  }
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { name, postId } = await params
  return (
    <div>
      <p>{name}</p>
      <p>{postId}</p>
    </div>
  )
}
