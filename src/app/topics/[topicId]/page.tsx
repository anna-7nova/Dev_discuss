import Link from 'next/link';
import { Button } from '@nextui-org/react';
import PageLayout from '@/app/components/page-layout';
import { fetchPosts } from '@/app/actions';

type TopicViewProps = {
  params: { topicId: string };
};

export default function TopicView({ params }: TopicViewProps) {

  console.log(params.topicId);
  const title = params.topicId.split('-').join(' ')
  return (
    <PageLayout
      title={title}
      fetchData={() => fetchPosts(params.topicId)}
      button={
        <Button href={`/topics/${params.topicId}/posts/new`} as={Link} color='primary' className='self-end bg-graphit'>
          Create Post
        </Button>
      }
      sidebarTitle={title}
    >
      <p>Here you can discuss about {title}</p>
    </PageLayout>
  );
}
