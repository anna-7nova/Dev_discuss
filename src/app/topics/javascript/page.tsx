import { db } from "../../../db";
import Link from "next/link";

export default async function TopicView() {
    const posts = await db.post.findMany();

    console.log(posts);

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col grow">
                <h2>javascript</h2>
                <div>
                    <p>Implementing Charts</p>
                </div>
            </div>
            <div className="flex flex-col grow-0">
                <Link className="border p-2 border-rounded" href="#">Create Post</Link>
                <div>
                    <h3>javascript</h3>
                    <p>Here you can discuss...</p>
                </div>
            </div>
        </div>
    )
}