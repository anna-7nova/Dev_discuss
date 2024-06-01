import { Button, Avatar } from "@nextui-org/react";
import { db } from "@/db";
import CommentReplay from "./comment_replay";
import CommentCreation from "@/app/components/comments_form"

interface AllCommentsProps {
  postId: string,
}
export default async function ViewAllComments({postId}: AllCommentsProps) {
  const comments= await db.comment.findMany();

  console.log(comments);

  return (
    <div className="border w-full flex flex-col mt-10 p-7 gap-5">
      <h3 style={{ fontWeight: "500" }}>All {/*number comments*/} comments</h3>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-7">
          <Avatar></Avatar>
          <div className="flex flex-col w-full gap-2">
            <h3>{/*User name*/}Marcos</h3>
            <div>fghsdfghdgf{}</div>
            <CommentCreation postId=""/>
          </div>
        </div>
        {/*<CommentReplay></CommentReplay>*/}
      </div>
    </div>
  );
}