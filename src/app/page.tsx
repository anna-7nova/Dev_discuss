import { Button } from "@nextui-org/react";
import * as action from "@/actions";
import { auth } from "@/auth";
import { db } from "../db";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const posts = await db.post.findMany();
  return (
    <main>
      <div className="flex justify-between items-center bg-gray-100 rounded-lg">
        <h2>Discuss</h2>
        <div className="flex">
          <form action={action.signIn}>
            <Button type="submit">Sign in</Button>
          </form>
          <form action={action.signOut}>
            <Button type="submit">Sign up</Button>
          </form>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        {session?.user ? (
          <div><h3>Signed in</h3>
            <p>{JSON.stringify(session.user)}</p>
          </div>
        ) : (
          <div>Signed out</div>
        )}
      </div>
      <div className="border p-2 border-rounded">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-bold">Top Posts</h2>
          <Button className="border p-2 border-rounded">New Topic</Button>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col grow">
            <div className="items-center p-2 border rounded">
              <div>{posts.map(({ id, title, user, comments }) => (
                <Link className="items-center p-2 border rounded" key={id} href={`/posts/${id}`}>
                  <p className="font-bold">{title}</p>
                  <div className="flex flex-row justify-between">
                    <div>{user}</div>
                    <div>{comments}</div>
                  </div>
                </Link>
              ))}
              </div>
            </div>

            <div className="items-center p-2 border rounded">
              <p className="font-bold">Implementing Charts</p>
              <div className="flex flex-row justify-between">
                <div>By wpa</div>
                <div>20 comments</div>
              </div>
            </div>
          </div>
          <div>
            <div className="items-center p-2 border rounded">
              <h3 className="text-l font-bold">Topics</h3>
              <ul>
                <li>javascript</li>
                <li>golang</li>
                <li>servers</li>
                <li>webdev</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}


