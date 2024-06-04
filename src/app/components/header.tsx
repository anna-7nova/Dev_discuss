'use client';

import { Button } from "@nextui-org/react";
import { useDisclosure } from '@nextui-org/react';
import * as action from "@/actions";
import SVGComponent from "./logotype";
import SearchComponent from "./search"

interface headerComponentProps {
    data: Record<string, any>; // указываем тип данных для props data
  }
  
const HeaderComponent: React.FC<headerComponentProps> =  ({data}) => {
    const { isOpen, onOpenChange, onOpen } = useDisclosure();


    return (
      <main>
        <div className="flex justify-between items-center bg-gray-100 rounded-lg px-16 py-4">
          <h2 className="ml--4"> 
            <SVGComponent/>
          </h2>
          <SearchComponent/>
          <div className="flex">
          {!data?.user ? (
            <form action={action.signIn} >
              <Button
                type="submit" onClick={onOpen} className="bg-green-500 text-white shadow-lg button-sign ">
                Sign in
              </Button>
              
            </form>
            ) : (
              
   
            <form action={action.signOut}>

              <Button type="submit" className="bg-gradient-to-tr from-grey-800 to-grey-800 text-black shadow button-sign">Sign out</Button> 
            </form>
              

          )}
          </div>
        </div>

      </main>
    );
}

export default HeaderComponent
  
