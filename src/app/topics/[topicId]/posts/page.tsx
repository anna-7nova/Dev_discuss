
import ViewPost from "@/app/components/current_post";
import ViewAllComments from "@/app/components/view_comments";


export default function ViewPostPage() {
  return (
    <main className="w-full flex flex-col justify-between items-center p-3 gap-5">
      <div className="flex flex-col p-10 gap-5">
      <ViewPost></ViewPost>
      <div className="mt-5" style={{ fontWeight: "300", fontSize:'16', fontStyle: "oblique"}}>So far no comments...</div>
       {/*<ViewAllComments></ViewAllComments>*/}
      </div>
    </main>
  );
}