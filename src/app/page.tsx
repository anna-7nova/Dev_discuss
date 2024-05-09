
import { auth } from "@/auth";
import HeaderComponent from "./components/header";
interface Session {

}
export default async function Home() {

  let session: Session | null = await auth();
  let dataSession = null
  if (session !== null) {
    dataSession = session
  } else {
    dataSession = ''
  }
  return (
    <HeaderComponent  data={dataSession}/>

  );
}
