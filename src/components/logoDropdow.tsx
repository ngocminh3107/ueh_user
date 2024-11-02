import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import EpicLogo from "@/assets/Epic-Games.png";
const LogoDropdow = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }
    return (
        <div className="flex row items-center justify-center"
            onClick={toggle}
        >
            <Image src={EpicLogo} alt="" className="w-[32px] h-[32px] mr-3" />

            <div
                className={`mr-4 transition-transform transform ${open ? 'rotate-180' : ''} hover:`}
            >
                <IoIosArrowDown className="text-[#F5F5F5]" />
            </div>
            <div className=" border h-[30px] w-[1px] border-[#8281816f]">
            </div>
        </div>
    )
}

export default LogoDropdow