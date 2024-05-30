import CreateTopic from './components/create-topic';
import PageLayout from './components/page-layout';

export default function Home() {
  return (
    <PageLayout title='Top Posts' button={<CreateTopic />} sidebarTitle='Topics'>
      <ul>
        <li>javascript</li>
        <li>golang</li>
        <li>servers</li>
        <li>webdev</li>
      </ul>
    </PageLayout>
  );
}
