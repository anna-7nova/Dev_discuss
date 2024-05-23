"use client";
import { Button, Textarea } from "@nextui-org/react";
import { createComment } from "@/app/actions";
import { useFormState } from "react-dom";

type CommentProps = {
  id: string;
  content: any;
  postId: string;
  userId: string;
  parentId: string;
  //isSave: boolean;
};

export default function ViewPost() {
  const [state, formAction] = useFormState(createComment, { message: '' });

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-5">
        <h3 style={{ fontSize: "20", fontWeight: "600" }}>
          {/*title*/}Implementing charts
        </h3>
        <p style={{ fontSize: "16" }}>
          {/** content */}I'm trying to add a charts into my application, can
          somebody help me out
        </p>

        <Textarea
          placeholder="Reply here"
          id="comment"
          name="content"
        ></Textarea>
        <Button type="submit" className="bg-blue-200" style={{ width: "15%" }}>
          Save
        </Button>
      </div>
    </form>
  );
}
