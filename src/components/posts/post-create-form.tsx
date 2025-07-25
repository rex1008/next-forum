"use client";

import {
  Button,
  Chip,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useActionState } from "react";
import * as actions from "@/actions";

interface PostCreateFormProps {
  name: string
}

export default function PostCreateForm({ name }: PostCreateFormProps) {
  const [state, formAction, isPending] = useActionState(actions.createPost.bind(null, name), {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="secondary" variant="bordered" className="block ml-auto">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form noValidate action={formAction}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!state.errors.title}
              errorMessage={state.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={!!state.errors.content}
              errorMessage={state.errors.content?.join(", ")}
            />
            {state.errors._form ? (
              <Chip variant="bordered" radius="sm" className="max-w-full">
                {state.errors._form.join(", ")}
              </Chip>
            ) : null}
            <Button isLoading={isPending} type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
