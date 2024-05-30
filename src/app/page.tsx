import CreateTopic from './components/create-topic';
import PostList from './components/post-list';

export default function Home() {
  return (
    <main className='container mx-auto px-4 flex flex-row justify-between'>
      <PostList title='Top Posts' />
      <div className='flex-initial basis-1/4 p-4 flex flex-col gap-y-8'>
        <CreateTopic />

        <div className='items-center p-2 border rounded'>
          <h3 className='text-l font-bold'>Topics</h3>
          <ul>
            <li>javascript</li>
            <li>golang</li>
            <li>servers</li>
            <li>webdev</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
