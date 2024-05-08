'use client';

import { Modal, ModalContent, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { useFormState } from 'react-dom';

type ModalWindowProps = {
    name: string;
    imageUrl:string;
    isOpen: boolean;
    onOpenChange: () => void;
  };
  
  export default function ModalSignWindow({ name, imageUrl, isOpen, onOpenChange }: ModalWindowProps) {

    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
        <ModalContent>
          {(onClose) => (
            <form>
              <ModalBody> 
                    
                    <img src={imageUrl} alt="Photo" />
                        <>
                            <p>Hello, {name} !</p>
                            <p>Nice to meet you !</p>
                        </>


              </ModalBody>
            </form>
          )}
        </ModalContent>
      </Modal>
    );
  }