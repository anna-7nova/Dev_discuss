'use client'

import { Button, useDisclosure } from '@nextui-org/react';
import ModalCreateTopic from './modal-create-topic';


export default function CreateTopic() {
    const { isOpen, onOpenChange, onOpen } = useDisclosure();
    return (
        <><Button className="border p-2 border-rounded" onPress={onOpen} color='primary'>
            New Topic
        </Button>
            <ModalCreateTopic isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
}