"use client";
import Image from 'next/image';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"




interface User {
    id: string,
    name: string,
    email: string,
    imageUrl: string,
    role: string,
    mssv: string,
    password: string
}

const UserManagement = () => {
    const router = useRouter();

    const [newuser, setnewUser] = React.useState({
        email: "",
        password: "",
        name: "",
        mssv: "",
        imageUrl: "https://res.cloudinary.com/dx3a3xlna/im",
    })

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/user/signup", newuser);
            console.log("Thêm sinh viên thành công", response.data);
            toast.success("Thêm sinh viên thành công!");
        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        }
    }
    const [user, setUsers] = useState<User[]>([
        {
            id: "",
            name: "",
            email: "",
            imageUrl: "",
            role: "",
            mssv: "",
            password: ""
        }
    ])


    useEffect(() => {
        axios.get('/api/admin/userdata')
            .then((res) => {
                setUsers(res.data.data)
            })
            .catch((err) => {
                toast.error(err.response.data.error)
            }
            )
    }, [])


    const deleteUser = (id: string) => {
        axios.delete('/api/admin/delete', { data: { id: id } })
            .then((res) => {
                toast.success("User deleted successfully")
                setUsers(user.filter((item) => item.id !== id))
            })
            .catch((err) => {
                toast.error(err.response.data.error)
            })
    }

    return (
        <div>
            <div className='bg-white rounded-[8px]  flex row  justify-between items-center min-w-full'>
                <div className='flex justify-between items-center px-5 py-5 w-full'>
                    <h2 className='text-black'>Dashboard</h2>
                </div>
                <div>
                    <div>

                        <Image
                            src='/images/undraw_Web_search_re_efla.svg'
                            width={20}
                            height={20}
                            alt='search'
                        />
                    </div>
                </div>
            </div>

            <div className="p-[30px] bg-white w-full rounded-[8px] text-black mt-7">
                <div>
                    <h2>List user</h2>
                    <div>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button className='bg-green-400 px-4 py-2 rounded-[4px]'>add new user</button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className='bg-white pb-5 '>
                                <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg max-w-md mx-auto">
                                    <label htmlFor="username" className="text-gray-700 font-semibold mb-2">Username</label>
                                    <input
                                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 text-gray-700"
                                        id="username"
                                        type="text"
                                        value={newuser.name}
                                        onChange={(e) => setnewUser({ ...newuser, name: e.target.value })}
                                        placeholder="Username"
                                    />

                                    <label htmlFor="mssv" className="text-gray-700 font-semibold mb-2">MSSV</label>
                                    <input
                                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 text-gray-700"
                                        id="mssv"
                                        type="text"
                                        value={newuser.mssv}
                                        onChange={(e) => setnewUser({ ...newuser, mssv: e.target.value })}
                                        placeholder="MSSV"
                                    />

                                    <label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email</label>
                                    <input
                                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 text-gray-700"
                                        id="email"
                                        type="text"
                                        value={newuser.email}
                                        onChange={(e) => setnewUser({ ...newuser, email: e.target.value })}
                                        placeholder="Email"
                                    />

                                    <label htmlFor="password" className="text-gray-700 font-semibold mb-2">Password</label>
                                    <input
                                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 text-gray-700"
                                        id="password"
                                        type="password"
                                        value= {newuser.password}
                                        onChange={(e) => setnewUser({ ...newuser, password: e.target.value })}
                                        placeholder="Password"
                                    />
                                </div>

                                <AlertDialogFooter>
                                    <AlertDialogCancel className="  bg-gray-500 text-white px-4 py-2 rounded">Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={onSignup} type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded">Update</AlertDialogAction>
                                </AlertDialogFooter>

                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>


                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="">MSSV</TableHead>
                            <TableHead className="">password</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead className="">Status</TableHead>
                            <TableHead className="text-right">Role</TableHead>


                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            user.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">
                                        <img src={item.imageUrl} alt="" className='w-10 h-10' />
                                    </TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell className="">{item.mssv}</TableCell>
                                    <TableCell className="">{item.password}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell className="flex row">
                                        <button className='bg-green-400 px-4 py-2 rounded-[4px]'>Edit</button>
                                        <button className='bg-red-400 px-4 py-2 rounded-[4px] ml-2'
                                            onClick={() => deleteUser(item.id)}
                                        >Delete</button>
                                        <button></button>

                                    </TableCell>
                                    <TableCell className="text-right">{item.role}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>


            </div>

        </div >
    );
}
export default UserManagement;