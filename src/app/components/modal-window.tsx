'use client';

import { ReactNode } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { useFormState } from 'react-dom';


type ModalWindowProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
  formHandler: any
};

export default function ModalWindow({ title, children, isOpen, onOpenChange, formHandler }: ModalWindowProps) {
  const [state, formAction] = useFormState(formHandler, { message: '' });
  console.log('state', state);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        {(onClose) => (
          <form action={formAction}>
            <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button onPress={onClose} type='submit'>
                Submit
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
