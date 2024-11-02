"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";
import Image from "next/image";
import ShopSvg from "@/assets/shop.svg";
import { FaRegUser } from "react-icons/fa";
import LogoDropdow from "@/components/logoDropdow";
import { TfiWorld } from "react-icons/tfi";
import {
    IoIosMenu,
    IoMdClose
} from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Drawers from "./drawer"

const NavHomePage = () => {
    const pathname = usePathname()
    const dropdownMenuItems = [
        {
            label: "My Achievements",
            link: "/achievements",
        },
        {
            label: "Epic rewards",
            link: "/rewards",
        },
        {
            label: "Epic Wallet",
            link: "/wallet",
        },
        {
            label: "Coupon",
            link: "/coupon",
        },
        {
            label: "Account",
            link: "/account",
        },
        {
            label: "Redeem Code",
            link: "/redeem",
        }, {
            label: "whishlist",
            link: "/whishlist"
        }
    ]
    const navmenu = [
        {
            label: "Distribution",
            link: "/distribution",
        },
        {
            label: "Support",
            link: "/support",
        },
        {
            label: "Unreal Engine",
            link: "/unreal-engine",
        }
    ]
    const router = useRouter();
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        imageUrl: "",
        role: "",
    })
    const [open, setOpen] = useState(true);

    const logout = async () => {
        try {
            await axios.get("/api/user/logout");
            toast.success("Logout success");
            router.push("/");
        } catch (error: any) {
            console.log("Logout failed", error.message);
            toast.error(error.message);
        }
    }
    const toggleMenu = function () {
        setOpen(!open);
    }
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("/api/user/userdata");
                setData({
                    id: res.data.data.userId,
                    name: res.data.data.name,
                    email: res.data.data.email,
                    imageUrl: res.data.data.imageUrl,
                    role: res.data.data.role,
                });
            } catch (error: any) {
                console.log("Get data failed", error.message);
                toast.error(error.message);
            }
        }
        getData();
    }, []);
    return (
        <div className={`flex row  justify-between  items-center px-[24px] py-[20px] ${!open ? "bg-[#101014] fixed top-0 w-full" : "bg-[#18181C] "}`}>
            <div className="flex row items-center">
                <div className={` translate-x duration-300 ${!open ? "hidden" : ""}`}>
                    <LogoDropdow />
                </div>
                <div className={`mx-0 translate duration-300 xl:mx-6 ${!open ? "mx-0" : "mx-6"}`}>
                    <Image src={ShopSvg} alt="" />
                </div>
                <ul className="row items-center hidden xl:flex ">
                    {
                        navmenu.map((item, index) => (
                            <li key={index} className={`text-[#AAAAAE] text-sm px-4 py-1 rounded-[8px] hover:bg-[#404044] hover:text-[white] ${pathname === item.link ? "bg-[#404044] text-[white]" : ""}`}>
                                <Link href={item.link}>
                                    {item.label}
                                </Link>
                            </li>

                        ))
                    }
                </ul>
            </div>
            <div onClick={() => { toggleMenu() }} className="" >
                <IoMdClose className={`xl:hidden text-[30px] ${open ? "hidden" : ""}`} />
                <IoIosMenu className={`xl:hidden text-[30px] ${!open ? "hidden" : ""}`} />
            </div>
            <Drawers />

            <div className="hidden row items-center xl:flex ">
                <div className="flex row dropdown dropdown-bottom items-center justify-center">
                    <div className="p-2 mr-4 w-[32px] h-[32px]">
                        <TfiWorld className="text-[20px] p-0 text-[#AAAAAE]" />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="p-2 mr-4 items-center justify-center text-center  bg-[#515050] rounded-full">
                                <FaRegUser className="text-[#AAAAAE]" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                                {
                                    dropdownMenuItems.map((item, index) => (
                                        <li key={index} className="hover:bg-[#404044] px-4 py-1.5 rounded-[4px] cursor-pointer">
                                            <Link href={item.link}>
                                                <p className="text-sm text-[#AAAAAE] hover:text-white">{item.label}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                                <li onClick={logout} className="hover:bg-[#404044] px-4 py-1.5 rounded-md cursor-pointer">
                                    <p className="text-sm text-[#AAAAAE] hover:text-white">Sign Out</p>
                                </li>

                            </ul>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <button className="rounded-[8px] text-sm cursor-pointer px-3 py-1.5 bg-[#26BBFF] text-[black] font-medium first-letter:uppercase ">
                    download
                </button>
            </div>
        </div>
    )
}

export default NavHomePage