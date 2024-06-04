'use client';

import { Button, useDisclosure } from '@nextui-org/react';
import ModalCreateTopic from './modal-create-topic';

export default function CreateTopic() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <>
      <Button className='self-end p-2  rounded-lg button_create bg-graphit' onPress={onOpen} color='primary'>
        New Topic
      </Button>
      <ModalCreateTopic isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
