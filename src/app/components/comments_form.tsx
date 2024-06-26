"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { createComment } from "@/app/actions";

interface CommentFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}

export default function CommentCreation({
  postId,
  parentId,
  startOpen,
}: CommentFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form action={action} ref={ref}>
      <div className="flex flex-col gap-4" style={{ fontSize: "20", width: "50%" }}>
        <Textarea
          placeholder="Enter your comment here"
          name="content"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
        />

        {formState.errors._form ? (
          <div className="bg-red-200">
            {formState.errors.content?.join(", ")}
          </div>
        ) : null}
        <Button type="submit" className="bg-blue-200 bg-olive">
          Create comment
        </Button>
      </div>
    </form>
  );
  return (
    <div className="flex flex-col gap-2">
      <Button
        style={{ width: "10%", border: "1px solid rgb(170, 212, 200)", color: "rgb(97, 110, 125)", backgroundAttachment: "black" }}
        variant="light"
        color="default"
        onClick={() => setOpen(!open)}
      >
        Reply
      </Button>
      {open && form}
    </div>
  );
}
