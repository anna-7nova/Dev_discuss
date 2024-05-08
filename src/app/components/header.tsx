'use client';

import { Button } from "@nextui-org/react";
import { useDisclosure } from '@nextui-org/react';
import * as action from "@/actions";
import ModalSignWindow from './modalSignWindow'
import Loader from "react-loader-spinner"; 
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 

interface headerComponentProps {
    data: Record<string, any>; // указываем тип данных для props data
  }
  
const HeaderComponent: React.FC<headerComponentProps> =  ({data}) => {
    console.log(data)
    const { isOpen, onOpenChange, onOpen } = useDisclosure();

    return (
      <main>
        <div className="flex justify-between items-center bg-gray-100 rounded-lg">
          <h2>Discuss</h2>
          <div className="flex">
          {!data?.user ? (
            <form action={action.signIn}>
              <Button type="submit" onClick={onOpen} >Sign in</Button>
              
              <ModalSignWindow name ={JSON.stringify(data.user?.name)} imageUrl = {JSON.stringify(data.user?.image)} isOpen={isOpen} onOpenChange={onOpenChange} >
              </ModalSignWindow>
            </form>
            ) : (
              <form action={action.signOut}>
              <Button type="submit">Sign out</Button> 
            </form>
          )}
          </div>
        </div>

      </main>
    );
}

export default HeaderComponent
  
