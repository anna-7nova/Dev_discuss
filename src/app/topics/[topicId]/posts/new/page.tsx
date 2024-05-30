'use client';

import ModalCreatePost from '@/app/components/modal-create-post';
import { useDisclosure } from '@nextui-org/react';

export default function CreatePostPage({ params }: { params: { topicId: string } }) {
  const { onOpenChange } = useDisclosure();
  return <ModalCreatePost onOpenChange={onOpenChange} slug={params.topicId} />;
}
