import {createPost, createComment} from "@/app/actions";
import {db} from "@/db"
import { notFound } from "next/navigation";
import CommentCreation from "@/app/components/comments_form";

interface PostProps {
 postId: string;
}

export default async function ViewPost({postId} : PostProps) {
const post = await db.post.findFirst({
  where: {id: postId}
 })

// if(!post) {
//notFound();
// }
  return (
      <div className="flex flex-col gap-5">
       <h3 style={{ fontSize: "20", fontWeight: "600" }}>
          {/*post.title*/} Implementing charts
        </h3>
        <p style={{ fontSize: "16" }}>
          {/*post.content*/}I am trying to add a charts into my application, can
          somebody help me out
        </p>
        </div>

  );
}
