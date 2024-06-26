import { Button, Avatar, user } from "@nextui-org/react";
import { db } from "@/db";
import CommentReplayShow from "./comment_replay";
import CommentCreation from "@/app/components/comments_form";
import { notFound } from "next/navigation";


interface AllCommentsProps {
  userId: string,
  postId: string,
  
}

export default async function ViewAllComments({postId, userId}: AllCommentsProps) {
  const comments= await db.comment.findMany({
    where: {postId}
  });
  const topComment = comments.filter((comment) => comment.parentId === null);
const addComment = topComment.map((comment) => {
  return (
    <CommentReplayShow key={comment.id} commentId={comment.id} postId={postId} userId={userId}/>
  )
})

return (
  <div className="border rounded-lg flex flex-col mt-10 p-7 gap-5" style={{width: "70%"}}>
  <h3 style={{ fontWeight: "500" }}>All {comments.length} comments</h3>
  <div className="flex flex-col gap-2">
    <div className="flex flex-row gap-7">
      <div className="flex flex-col w-full gap-2">
        <div>{addComment}</div>
      </div>
    </div>
  </div>
</div>

)
  
}