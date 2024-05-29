import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { db } from '../../../db';

export default async function TopicView({ params }: { params: { topicId: string } }) {
  const posts = await db.post.findMany();

  return (
    <div className='p-4'>
      <div className='flex flex-row justify-between items-center mb-2'>
        <h2 className='text-xl font-bold'>{params.topicId}</h2>
        <Button href={`/topics/${params.topicId}/posts/new`} as={Link} color='primary'>
          Create Post
        </Button>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-col grow pr-6'>
          <div className='items-center p-2 border rounded'>
            <div>
              {posts.map(({ id, title, user, comments }) => (
                <Link className='items-center p-2 border rounded' key={id} href={`/posts/${id}`}>
                  <p className='font-bold'>{title}</p>
                  <div className='flex flex-row justify-between'>
                    <div>{user}</div>
                    <div>{comments}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='items-center p-2 border rounded'>
            <p className='font-bold'>Implementing Charts</p>
            <div className='flex flex-row justify-between'>
              <div>By wpa</div>
              <div>20 comments</div>
            </div>
          </div>
        </div>

        <div>
          <div className='items-center p-2 border rounded'>
            <h3 className='text-l font-bold'>javascript</h3>
            <p>Here you can discuss...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
