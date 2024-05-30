import Link from 'next/link';
import { Button } from '@nextui-org/react';
import PostList from '@/app/components/post-list';

export default async function TopicView({ params }: { params: { topicId: string } }) {
  return (
    <div className='container mx-auto px-4 flex flex-row justify-between'>
      <PostList title={params.topicId} />
      <div className='flex-initial basis-1/4 p-4 flex flex-col gap-y-8'>
        <Button href={`/topics/${params.topicId}/posts/new`} as={Link} color='primary' className='self-end'>
          Create Post
        </Button>
        <div className='items-center p-2 border rounded'>
          <h3 className='text-l font-bold'>{params.topicId}</h3>
          <p>Here you can discuss...</p>
        </div>
      </div>
    </div>
  );
}
