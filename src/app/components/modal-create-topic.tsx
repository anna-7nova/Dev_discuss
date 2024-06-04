'use client';

import { useFormState } from 'react-dom';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { createTopic } from '@/app/actions';
import CustomInput from './custom-input';

type ModalWindowProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export default function ModalCreateTopic({ isOpen, onOpenChange }: ModalWindowProps) {
  const [state, formAction] = useFormState(createTopic, { message: '' });
  const errMessage = state.message;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        {(onClose) => (
          <form action={formAction}>
            <ModalHeader className='flex flex-col gap-1'>Create a Topic</ModalHeader>
            <ModalBody>
              <CustomInput id='name' label='Name' placeholder='Enter topic name' name='name' />
              <CustomInput id='description' label='Description' placeholder='Enter a description' name='description' />
            </ModalBody>
            <ModalFooter>
              <Button type='submit'  className='bg-olive'>
                Submit
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
