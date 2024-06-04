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
        <p className='font-bold'>{title}</p>
        <div className='flex flex-row justify-between'>
          <div>By {user?.name || 'Anonymous'}</div>
          <div>{numberOfComments} comments</div>
        </div>
      </div>
    </Link>
  );
}
