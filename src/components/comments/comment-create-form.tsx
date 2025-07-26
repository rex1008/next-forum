"use client";

import { Button, Chip, Textarea } from "@nextui-org/react";
import React, { useActionState, useEffect, useRef, useState } from "react";
import * as actions from "@/actions";

interface CommentCreateFormProps {
  postId: string | null;
  isOpen?: boolean;
  parentId?: string;
}

export default function CommentCreateForm({ postId, isOpen, parentId }: CommentCreateFormProps) {
  const [open, setOpen] = useState(isOpen);
  const [state, formAction, isPending] = useActionState(
    actions.createComment.bind(null, { postId, parentId }),
    {
      errors: {},
    }
  );

  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="space-y-3 mt-3">
      <Button color="default" size="sm" variant="shadow" onPress={() => {
        setOpen(!open)
      }}>
        Reply
      </Button>
      {open && (
        <form
          action={formAction}
          noValidate
          className="space-y-3"
          ref={formRef}
        >
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
          <Button
            isLoading={isPending}
            type="submit"
            color="secondary"
            variant="bordered"
          >
            Post Comment
          </Button>
        </form>
      )}
    </div>
  );
}
