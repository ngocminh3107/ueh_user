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
import Drawer from "./drawer"


const NavHomeMobilePage = () => {
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

    //get height screen
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    
    return (

        <div className={`px-[24px] `}  >
            <div className="">
                <div className="w-full justify-end items-end flex row mt-2 mb-2">
                    <div className="p-2 mr-4 w-[32px] h-[32px]">
                        <TfiWorld className="text-[20px] p-0 text-[#AAAAAE]" />
                    </div>
                    <div className="p-2 items-center justify-center text-center  bg-[#515050] rounded-full">
                        <FaRegUser className="text-[#AAAAAE]" />
                    </div>
                </div>
                <div className="flex-col flex justify-between items-center pb-[24px]" style={{ height: `${height - 120}px` }}>
                    <ul className="flex-col grid gap-4 w-full">

                        {
                            navmenu.map((item, index) => (
                                <li key={index} className={`text-[#E6E6EA] text-sm p-4 bg-[#202024] rounded-[8px] hover:bg-[#404044] hover:text-[white] ${pathname === item.link ? "bg-[#404044] text-[white]" : ""}`}>
                                    <Link href={item.link}>
                                        {item.label}
                                    </Link>
                                </li>

                            ))
                        }
                    </ul>
                    <button className="rounded-[8px]  max-sm:w-full w-[342px]  p-4 text-sm cursor-pointer bg-[#26BBFF] text-[black] font-medium first-letter:uppercase ">
                        download
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavHomeMobilePage