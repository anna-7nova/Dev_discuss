import { Link } from '@nextui-org/react';
import { UserData } from '../types';

type PostCardProps = {
  id: string;
  title: string;
  user: UserData;
  topicSlug: string;
  numberOfComments: number;
};

export default function PostCard({ id, title, user, topicSlug, numberOfComments }: PostCardProps) {
  return (
    <Link key={id} href={`/topics/${topicSlug}/posts/${id}`} color='foreground'>
      <div className='container flex flex-col gap-y-4 p-2 border rounded'>
        <p className='text-lg font-bold'>{title}</p>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row justify-center gap-x-2'>
            By <p className='text-base font-semibold italic'>{user?.name || 'Anonymous'}</p>
          </div>
          <div>{numberOfComments} comments</div>
        </div>
      </div>
    </Link>
  );
}
