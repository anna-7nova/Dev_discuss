
import ViewPost from "@/app/components/current_post";
import ViewAllComments from "@/app/components/view_comments";
import CommentCreation from "@/app/components/comments_form";

interface ViewPostProps {
  params: {
    topicId: string;
    postId: string;
  }
}

export default function ViewPostPage({params} : ViewPostProps) {

  const {topicId, postId} = params;

  return (
    <main className="flex flex-col justify-start  p-3 gap-5" style={{width: "100%"}}>
      <div className="flex flex-col p-10 gap-5 justify-center">
      <ViewPost postId = {postId}/>
      <CommentCreation postId = {postId} startOpen/>
       <ViewAllComments postId={postId}/>
      </div>
    </main>
  );
}