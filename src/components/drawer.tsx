import { Dispatch, SetStateAction } from 'react';
import NavHomeMobilePage from './nav.home.mobile';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerFooter,
} from "@/components/ui/drawer"
import { Button } from './ui/button';
import { IoIosMenu, IoMdClose } from 'react-icons/io';

const Drawers = () => {
    return (
        <>
            <Drawer>
                <DrawerTrigger className='absolute top-9 right-9  h-1 w-1'>
                </DrawerTrigger>
                <DrawerContent>
                    <NavHomeMobilePage/>
                </DrawerContent>
            </Drawer>
        </>


    );
};

export default Drawers;
