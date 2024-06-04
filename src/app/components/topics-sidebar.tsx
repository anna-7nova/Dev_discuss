import { db } from '@/db';
import { Link } from '@nextui-org/react';

export default async function TopicsSidebar() {
  const topics = await db.topic.findMany({ select: { id: true, slug: true } });
  return (
    <nav>
      <ul className='flex flex-col gap-y-2'>
        {topics.map(({ id, slug }) => (
          <li key={id}>
            <Link
              href={`/topics/${slug}`}
              className='p-2 text-lg font-medium leading-5 text-zinc-800 border-solid border-2 border-zinc-200 rounded-2xl transition ease-in-out delay-150 hover:bg-zinc-200'
            >
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
