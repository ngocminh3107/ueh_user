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
import Logo from "@/assets/MYUEH_logo.png"
import {
    IoIosMenu,
    IoMdClose
} from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Drawers from "./drawer"

const NavHomePage = () => {
    const pathname = usePathname()
    const dropdownMenuItems = [
        {
            label: "Account",
            link: "/account",
        },
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
            router.push("/login");
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
                    id: res.data.data.id,
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
        <nav className="border-gray-200 bg-white dark:bg-gray-900">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={Logo} className="h-8 w-auto" alt="EUH LOGO" />
                </a>
                <div className="flex md:w-auto">
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        className="me-1 rounded-xl p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
                    >
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block ">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                            <svg
                                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                            <svg
                                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="Search..."
                        />
                    </div>
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-white p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                        <li>
                            <p
                                className="block rounded px-3 py-2 text-[#005E69] hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-[#F26F33] md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                aria-current="page"
                            >
                                <Link href={"/"}>
                                    Trang chủ
                                </Link>

                            </p>
                        </li>
                        <li>
                            <p className="block rounded px-3 py-2 text-[#005E69] hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-[#F26F33] md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                                <Link href={"/review"}>
                                    Cơ sở
                                </Link>
                            </p>
                        </li>
                        <li>
                            <p
                                className="block rounded px-3 py-2 text-[#005E69] hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-[#F26F33] md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                <Link href={
                                    "/event"
                                }>
                                     Hoạt động
                                </Link>
                               
                            </p>
                        </li>
                        <li>
                            <p
                                
                                className="block rounded px-3 py-2 text-[#005E69] hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-[#F26F33] md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Giải trí
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex md:order-2 md:w-auto">
                    <div onClick={() => { toggleMenu() }} className="" >
                        <IoMdClose className={`xl:hidden text-[30px] ${open ? "hidden" : ""}`} />
                        <IoIosMenu className={`xl:hidden text-[30px] ${!open ? "hidden" : ""}`} />
                    </div>
                    <Drawers />

                    <div className="hidden row items-center xl:flex ">
                        <div className="flex row dropdown dropdown-bottom items-center justify-center">
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
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default NavHomePage