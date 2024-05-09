import * as action from '@/actions';
import { auth } from '@/auth';
import { Button, useDisclosure } from '@nextui-org/react';
import ModalCreateTopic from './components/modal-create-topic';
import HeaderComponent from "./components/header";

interface Session {

}
export default async function Home() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  let session: Session | null = await auth();
  let dataSession = null
  if (session !== null) {
    dataSession = session
  } else {
    dataSession = ''
  }
  return (

    <main>
      <HeaderComponent  data={dataSession}/>
      <Button onPress={onOpen} color='primary'>
        New Topic
      </Button>
      <ModalCreateTopic isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
 )
}


