import { db } from '@/db';
import { Link } from '@nextui-org/react';

type PostCardProps = {
  id: string;
  title: string;
  userId: string;
  topicId: string;
};

export default async function PostCard({ id, title, userId, topicId }: PostCardProps) {
  const topic = await db.topic.findFirst({ where: { id: topicId } });
  const user = await db.user.findUnique({ where: { id: userId } });
  const comments = await db.comment.findMany({ where: { postId: id } });
  return (
    <Link key={id} href={`/topics/${topic?.slug}/posts/${id}`} color='foreground'>
      <div className='container flex flex-col gap-y-4 p-2 border rounded'>
        <p className='font-bold'>{title}</p>
        <div className='flex flex-row justify-between'>
          <div>By {user?.name || 'Anonymous'}</div>
          <div>{comments.length} comments</div>
        </div>
      </div>
    </Link>
  );
}
