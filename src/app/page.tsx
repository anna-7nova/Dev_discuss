import * as action from '@/actions';
import { auth } from '@/auth';
import { Button, useDisclosure } from '@nextui-org/react';
import ModalCreateTopic from './components/modal-create-topic';
import GeneralHeader from './components/generalHeader';


export default async function Home() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (

    <main>
      <GeneralHeader/>
      <Button onPress={onOpen} color='primary'>
        New Topic
      </Button>
      <ModalCreateTopic isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
 )
}


