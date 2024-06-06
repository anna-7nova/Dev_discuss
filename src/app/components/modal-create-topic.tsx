'use client';

import { useFormState } from 'react-dom';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Textarea, Button } from '@nextui-org/react';
import { createTopic } from '@/app/actions';
import CustomInput from './custom-input';
import { SubmitButton } from './submit-button';

type ModalWindowProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export default function ModalCreateTopic({ isOpen, onOpenChange }: ModalWindowProps) {
  const [state, formAction] = useFormState(createTopic, { errors: {} });

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        <form action={formAction}>
          <ModalHeader className='flex flex-col gap-1'>Create a Topic</ModalHeader>
          <ModalBody>
            <CustomInput
              id='name'
              label='Name'
              placeholder='Enter topic name'
              name='name'
              isInvalid={!!state.errors.name}
              errorMessage={state.errors.name?.join(', ')}
            />
            <Textarea
              id='description'
              name='description'
              label='Description'
              variant='bordered'
              isInvalid={!!state.errors.description}
              placeholder='Enter a description'
              errorMessage={state.errors.description}
            />
            {state.errors._form && <p className='text-xs text-red-600'>{state.errors._form?.join(', ')}</p>}
          </ModalBody>
          <ModalFooter>
            <SubmitButton text='Create' />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
