import { Modal, ModalContent, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import SVGComponent from './logotype';

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
            <form onClick ={onClose}>
              <ModalBody className="grid text-center place-content-center" > 
                    
              <SVGComponent/>
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