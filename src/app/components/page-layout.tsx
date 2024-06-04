import { ReactNode } from 'react';
import PostList from './post-list';

type PageLayoutProps = {
  title: string;
  sidebarTitle: string;
  button: ReactNode;
  children: ReactNode;
  topicSlug: string;
};

export default function PageLayout({ title, button, sidebarTitle, topicSlug, children }: PageLayoutProps) {
  return (
    <main className='container mx-auto px-2 py-4'>
      <div className='flex justify-between'>
        <PostList title={title} topicSlug={topicSlug} />
        <div className='flex-initial basis-1/4 p-4 flex flex-col gap-y-8'>
          {button}
          <div className='items-center p-2 border rounded'>
            <h3 className='text-l font-bold mb-4'>{sidebarTitle}</h3>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}