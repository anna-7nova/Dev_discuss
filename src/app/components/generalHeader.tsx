
import { auth } from '@/auth';
import HeaderComponent from "./header";

interface Session {

}
export default async function GeneralHeader() {

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
    </main>
 )
}
