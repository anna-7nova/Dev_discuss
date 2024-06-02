
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
    <main className="w-full flex flex-col justify-between items-center p-3 gap-5">
      <div className="flex flex-col p-10 gap-5">
      <ViewPost postId = {postId}/>
      <CommentCreation postId = {postId} startOpen/>
      {/*<div className="mt-5" style={{ fontWeight: "300", fontSize:'16', fontStyle: "oblique"}}>So far no comments...</div>*/}
       <ViewAllComments postId={postId}/>
      </div>
    </main>
  );
}