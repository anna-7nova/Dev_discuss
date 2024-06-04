import { db } from "@/db";
import { notFound } from "next/navigation";

interface PostProps {

  postId: string;
}

export default async function ViewPost({  postId }: PostProps) {
  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }
  return (
    <div className="flex flex-col gap-5 border rounded-lg p-4" >
      <h3 style={{ fontSize: "20", fontWeight: "600" }} className="underline underline-offset-2 ">{post.title}</h3>
      <p style={{ fontSize: "16" }}>{post.content}</p>
    </div>
  );
}
