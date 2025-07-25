import TopicCreateForm from '@/components/topics/topic-create-form'
import TopicList from '@/components/topics/topic-list'
import React from 'react'

export default function Page() {
  return (
    <div className='flex justify-between'>
      <div>
        <h1 className='text-xl mt-2'>Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm/>
        <TopicList/>
      </div>
    </div>
  )
}
