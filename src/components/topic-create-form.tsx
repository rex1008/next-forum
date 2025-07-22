"use client"

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from '@nextui-org/react'
import React, { useActionState } from 'react'
import * as actions from '@/actions'

export default function TopicCreateForm() {
  const [state, formAction] = useActionState(actions.createTopic, {
    errors: {}
  })

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color='secondary' variant='bordered'>Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={formAction}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a Topic</h3>
            <Input 
              name='name' 
              label="Name" 
              labelPlacement='outside' 
              placeholder='Name' 
              isInvalid={!!state.errors.name} 
              errorMessage={state.errors.name?.join(", ")} />
            <Textarea 
              name='description' 
              label="Description" 
              labelPlacement='outside' 
              placeholder='Description your topic' 
              isInvalid={!!state.errors.description} 
              errorMessage={state.errors.description?.join(", ")} />
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>

  )
}
