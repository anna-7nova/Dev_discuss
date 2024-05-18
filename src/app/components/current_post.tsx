import { Button, Textarea } from "@nextui-org/react";
//import {createPost} from "@/app/actions";

export default function ViewPost() {
  return (
<main>
<div className="flex flex-col gap-5">
  <h3 style={{fontSize: '20', fontWeight: '600'}}>{/*title*/}Implementing charts</h3>
  <p style={{fontSize: '16'}}>
    {/** content */}I'm trying to add a charts into my application, can
    somebody help me out
  </p>
  <Textarea placeholder="Reply here"></Textarea>
  <Button className="bg-blue-200" style={{width:'15%'}}>Save</Button>
</div>
</main>

  )}