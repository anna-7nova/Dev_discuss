import PostCard from './post-card';
import { PostData } from '../types';

type PostListProps = {
  blockTitle: string;
  fetchData: () => Promise<PostData[]>;
};

export default async function PostList({ blockTitle, fetchData }: PostListProps) {
  const posts = await fetchData();

  return (
    <div className='flex-initial basis-1/2 flex flex-col gap-y-8 items-stretch'>
      <h2 className='text-xl font-bold'>{blockTitle}</h2>
      <div className='flex flex-col grow gap-y-4'>
        {posts.map(({ id, title, user, topic, _count }) => (
          <PostCard
            key={id}
            id={id}
            title={title}
            user={user}
            topicSlug={topic.slug}
            numberOfComments={_count.comments}
          />
        ))}
      </div>
    </div>
  );
}
