import ViewPost from '@/app/components/current_post';
import ViewAllComments from '@/app/components/view_comments';
import CommentCreation from '@/app/components/comments_form';
import { Link } from '@nextui-org/react';
import { paths } from '@/app/utils/paths';

interface ViewPostProps {
  params: {
    topicId: string;
    postId: string;
    userId: string;
  };
}

export default function ViewPostPage({ params }: ViewPostProps) {
  const { topicId, postId } = params;

  return (
    <main className='flex flex-col justify-start  p-3 gap-5' style={{ width: '100%' }}>
      <div className='flex flex-col p-10 gap-5 justify-center'>
        <Link
          href={paths.topic(topicId)}
          color='foreground'
          className='text-lg font-semibold text-slate-950 underline'
        >
          Go back to {topicId}
        </Link>
        <ViewPost postId={postId} />
        <CommentCreation postId={postId} startOpen />
        <ViewAllComments postId={postId} />
      </div>
    </main>
  );
}
