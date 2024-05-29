'use client';

import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { createPost } from '@/app/actions';
import CustomInput from './custom-input';

type ModalWindowProps = {
  onOpenChange: () => void;
};

export default function ModalCreatePost({ onOpenChange }: ModalWindowProps) {
  const [state, formAction] = useFormState(createPost, { message: '' });
  const errMessage = state.message;

  const router = useRouter();
  const handleCloseModal = () => router.back();

  return (
    <Modal defaultOpen={true} onOpenChange={onOpenChange} onClose={handleCloseModal} placement='top-center'>
      <ModalContent>
        {(onClose) => (
          <form action={formAction}>
            <ModalHeader className='flex flex-col gap-1'>Create a Topic</ModalHeader>
            <ModalBody>
              <CustomInput id='title' label='Title' placeholder='Enter title' name='title' />
              <CustomInput id='content' label='Content' placeholder='Enter a content' name='content' />
              {!!errMessage && <p className='text-xs text-red-600'>{errMessage}</p>}
            </ModalBody>
            <ModalFooter>
              <Button onPress={onClose} type='submit' color='primary' isDisabled={!!errMessage}>
                Submit
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
