import { Modal, ModalContent, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import Loader from "react-loader-spinner"; 
import {Avatar} from "@nextui-org/avatar";

type ModalWindowProps = {
    name: string;
    imageUrl:string;
    isOpen: boolean;
    onOpenChange: () => void;
  };
  
  export default function ModalSignWindow({ name, imageUrl, isOpen, onOpenChange }: ModalWindowProps) {
    console.log(imageUrl)
    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
        <ModalContent>
          {(onClose) => (
            <form onClick ={onClose}>
              <ModalBody> 
                    
                    <Avatar src={imageUrl} className="w-20 h-20 text-large" />
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