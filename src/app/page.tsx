'use client'

import { Button, useDisclosure } from '@nextui-org/react';
import ModalCreateTopic from './components/modal-create-topic';


export default function Home() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (

    <main>
      <Button onPress={onOpen} color='primary'>
        New Topic
      </Button>
      <ModalCreateTopic isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
 )
}


