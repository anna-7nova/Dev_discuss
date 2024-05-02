import { Button } from "@nextui-org/react";

export default function TopicView() {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col grow">
                <h2>/*{fieldOfTopic}*/javascript</h2>
                <div>
                    <p>/*{post}*/Implementing Charts</p>
                </div>
            </div>
            <div className="flex flex-col grow-0">
                <Button>/*{ }*/Create Post</Button>
                <div>
                    <h3>/*{fieldOfTopic}*/javascript</h3>
                    <p>/*{descriptionOfTopic}*/Here you can discuss...</p>
                </div>
            </div>
        </div>
    )
}