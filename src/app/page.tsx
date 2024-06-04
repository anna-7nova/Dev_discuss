import CreateTopic from './components/create-topic';
import PageLayout from './components/page-layout';
import TopicsSidebar from './components/topics-sidebar';

export default async function Home() {
  return (
    <PageLayout title='Top Posts' button={<CreateTopic />} sidebarTitle='Topics' topicSlug=''>
      <TopicsSidebar />
    </PageLayout>
  );
}
