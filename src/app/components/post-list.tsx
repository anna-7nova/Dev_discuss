import { db } from '@/db';
import PostCard from './post-card';

type PostListProps = {
  title: string;
  topicSlug: string;
};

export default async function PostList({ title, topicSlug }: PostListProps) {
  const topic = await db.topic.findFirst({ where: { slug: topicSlug } });
  const posts = await db.post.findMany({ where: { topicId: topic?.id } });

  return (
    <div className='flex-initial basis-1/2 flex flex-col gap-y-8 items-stretch'>
      <h2 className='text-xl font-bold'>{title}</h2>
      <div className='flex flex-col grow gap-y-4'>
        {posts.map(({ id, title, userId, topicId }) => (
          <PostCard key={id} id={id} title={title} userId={userId} topicId={topicId} />
        ))}
      </div>
    </div>
  );
}
