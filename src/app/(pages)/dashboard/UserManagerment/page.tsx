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
    const onSignup = async () => {
        try {
            const response = await axios.post("/api/user/signup",user);
            console.log("Signup success", response.data);
            router.push("/login");
        } catch (error:any) {
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






    // async function createRandomUsers() {
    //     try {
    //       const response = await fetch('/api/admin/random', {
    //         method: 'POST',
    //       });

    //       if (response.ok) {
    //         console.log('Random users created successfully');
    //         // Refresh the user list or perform other actions as needed
    //       } else {
    //         console.error('Error creating random users');
    //       }
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   }
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
                            <AlertDialogContent>

                             
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="  bg-gray-500 text-white px-4 py-2 rounded">Cancel</AlertDialogCancel>
                                    <AlertDialogAction type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded">Update</AlertDialogAction>
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
                                <TableCell>{item.email}</TableCell>
                                <TableCell className="">
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