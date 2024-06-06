import { Avatar } from '@nextui-org/react';
import { db } from '@/db';
import CommentCreation from '@/app/components/comments_form';

interface ReplayShowProps {
  commentId: string;
  postId: string;
  userId: string;
}

export default async function CommentReplayShow({ commentId, postId, userId }: ReplayShowProps) {
  const comments = await db.comment.findMany({
    where: { postId },
  });
  const comment = comments.find((comment) => comment.id === commentId);

  if (!comment) {
    return null;
  }

  const childrenComment = comments.filter((comment) => comment.parentId === commentId);
  const addChildren = childrenComment.map((childComment) => {
    return <CommentReplayShow key={childComment.id} commentId={childComment.id} postId={postId} userId={userId} />;
  });
  const user = await db.user.findFirst({ where: { id: userId } });
  return (
    <div className='border rounded-lg flex flex-col gap-7 p-7'>
      <div className='flex items-center gap-x-4'>
        <Avatar showFallback={!!user?.image} src={user?.image || ''} />
        <h3 className='text-lg italic'>{user?.name}</h3>
      </div>
      <div className='flex flex-col gap-2'>
        <p>{comment.content}</p>
        {addChildren}
        <CommentCreation postId={comment.postId} parentId={comment.id} />
      </div>
    </div>
  );
}
