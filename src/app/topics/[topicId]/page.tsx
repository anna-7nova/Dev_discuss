import Link from 'next/link';
import { Button } from '@nextui-org/react';
import PageLayout from '@/app/components/page-layout';
import { fetchPosts } from '@/app/actions';

export default function TopicView({ params }: { params: { topicId: string } }) {
  return (
    <PageLayout
      title={params.topicId}
      fetchData={() => fetchPosts(params.topicId)}
      button={
        <Button href={`/topics/${params.topicId}/posts/new`} as={Link} color='primary' className='self-end bg-graphit'>
          Create Post
        </Button>
      }
      sidebarTitle={params.topicId}
    >
      <p>Here you can discuss...</p>
    </PageLayout>
  );
}
