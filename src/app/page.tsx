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
    <div className='flex justify-between items-center bg-gray-100 rounded-lg'>
        <h2>Discuss</h2>
        <div className='flex'>
          <form action={action.signIn}>
            <Button type='submit'>Sign in</Button>
          </form>
          <form action={action.signOut}>
            <Button type='submit'>Sign up</Button>
          </form>
        </div>
      </div>
            {/* <div className='flex flex-row-reverse'>
        {session?.user ? (
          <div>
            <h3>Signed in</h3>
            <p>{JSON.stringify(session.user)}</p>
          </div>
        ) : (
          <div>Signed out</div>
        )}
      </div> */}
      <Button onPress={onOpen} color='primary'>
        New Topic
      </Button>
      <ModalCreateTopic isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
 )
}


