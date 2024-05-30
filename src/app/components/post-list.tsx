import { db } from '@/db';
import PostCard from './post-card';

type PostListProps = {
  title: string;
};

export default async function PostList({ title }: PostListProps) {
  const posts = await db.post.findMany();
  return (
    <div className='flex-initial basis-1/2 p-4 flex flex-col gap-y-8 items-stretch mb-2'>
      <h2 className='text-xl font-bold'>{title}</h2>
      <div className='flex flex-col grow gap-y-4'>
        {posts.map(({ id, title, userId, topicId }) => (
          <PostCard key={id} id={id} title={title} userId={userId} topicId={topicId} />
        ))}

        <div className='items-center p-2 border rounded'>
          <p className='font-bold'>Implementing Charts</p>
          <div className='flex flex-row justify-between'>
            <div>By wpa</div>
            <div>20 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
