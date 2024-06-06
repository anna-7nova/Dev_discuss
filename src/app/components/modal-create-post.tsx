'use client';

import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea } from '@nextui-org/react';
import { createPost } from '@/app/actions';
import CustomInput from './custom-input';
import { SubmitButton } from './submit-button';

type ModalWindowProps = {
  onOpenChange: () => void;
  slug: string;
};

export default function ModalCreatePost({ onOpenChange, slug }: ModalWindowProps) {
  const [state, formAction] = useFormState(createPost.bind(null, slug), { errors: {} });
  const router = useRouter();
  const handleCloseModal = () => router.back();

  return (
    <Modal defaultOpen={true} onOpenChange={onOpenChange} onClose={handleCloseModal} placement='top-center'>
      <ModalContent>
        {(onClose) => (
          <form action={formAction}>
            <ModalHeader className='flex flex-col gap-1'>Create a Post</ModalHeader>
            <ModalBody>
              <CustomInput
                id='title'
                label='Title'
                placeholder='Enter title'
                name='title'
                isInvalid={!!state.errors.title}
                errorMessage={state.errors.title}
              />
              <Textarea
                id='content'
                name='content'
                label='Content'
                variant='bordered'
                isInvalid={!!state.errors.content}
                placeholder='Enter a content'
                errorMessage={state.errors.content}
              />
              {state.errors._form && <p className='text-xs text-red-600'>{state.errors._form?.join(', ')}</p>}
            </ModalBody>
            <ModalFooter>
              <SubmitButton text='Create' />
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
