import { db } from "../../../db";
import Link from "next/link";

export default async function TopicView() {
    const posts = await db.post.findMany();

    console.log(posts);

    return (
        <div >
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-xl font-bold">javascript</h2>
                <Link className="border p-2 border-rounded" href="/posts/new">Create Post</Link>
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
                        <h3 className="text-l font-bold">javascript</h3>
                        <p>Here you can discuss...</p>
                    </div>
                </div>

            </div>
        </div>
    );
}