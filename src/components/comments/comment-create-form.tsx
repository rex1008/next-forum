"use client"

import { Button, Chip, Textarea } from "@nextui-org/react";
import React, { useActionState } from "react";
import * as actions from "@/actions";

interface CommentCreateFormProps {
  postId: string;
}

export default function CommentCreateForm({ postId }: CommentCreateFormProps) {
  const [state, formAction, isPending] = useActionState(
    actions.createComment.bind(null, { postId }),
    {
      errors: {},
    }
  );

  return (
    <form action={formAction} noValidate className="space-y-3">
      <Textarea
        name="content"
        label="Reply"
        labelPlacement="inside"
        placeholder="Enter your comment"
        isInvalid={!!state.errors.content}
        errorMessage={state.errors.content?.join(", ")}
      />
      {state.errors._form ? (
        <Chip variant="bordered" radius="sm" className="max-w-full">
          {state.errors._form.join(", ")}
        </Chip>
      ) : null}
      <Button isLoading={isPending} type="submit" color="secondary" variant="bordered">
        Post Comment
      </Button>
    </form>
  );
}
