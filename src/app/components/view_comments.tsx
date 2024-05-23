import { Button, Avatar } from "@nextui-org/react";
import { db } from "@/db";
import {createComment} from "@/app/actions"
import CommentReplay from "./comment_replay";

export default async function ViewAllComments() {
  const comments= await db.comment.findFirst();
  console.log(comments);

  return (
    <div className="border w-full flex flex-col mt-10 p-7 gap-5">
      <h3 style={{ fontWeight: "500" }}>All {/*number comments*/} comments</h3>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-7">
          <Avatar></Avatar>
          <div className="flex flex-col gap-2">
            <h3>{/*User name*/}Marcos</h3>
            <p>{comments?.content}Have you tried using the Charts JS library?</p>
            <Button className="bg-white" style={{width:'15%', fontWeight: "700", fontSize:'16'}}>Reply</Button>
          </div>
        </div>
        {/*<CommentReplay></CommentReplay>*/}
      </div>
    </div>
  );
}