
import ViewPost from "@/app/components/current_post";
import ViewAllComments from "@/app/components/view_comments";
import CommentCreation from "@/app/components/comments_form";
import { user } from "@nextui-org/react";

interface ViewPostProps {
  params: {
    topicId: string;
    postId: string;
    userId: string;
  }
}

export default function ViewPostPage({params} : ViewPostProps) {

  const {topicId, postId, userId} = params;

  return (
    <main className="flex flex-col justify-start  p-3 gap-5" style={{width: "100%"}}>
      <div className="flex flex-col p-10 gap-5">
      <ViewPost postId = {postId}/>
      <CommentCreation postId = {postId} startOpen/>
       <ViewAllComments postId={postId} userId={userId} />
      </div>
    </main>
  );
}