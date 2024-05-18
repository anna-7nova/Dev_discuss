
import { Button, Avatar } from "@nextui-org/react";

export default function CommentReplay() {
  return (<div className="border w-full flex flex-row gap-7 p-7">
<Avatar></Avatar>
<div className="flex flex-col gap-2">
  <h3>{/*secondUser name*/}Mito</h3>
  <p>{/*comment text*/}Yes, I'm tried</p>
  <Button className="bg-white" style={{width:'15%', fontWeight: "700", fontSize:'16'}}>Reply</Button>
</div>
</div>
  )
}