"use client";
import Image from 'next/image';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface User {
    id: string,
    name: string,
    email: string,
    imageUrl: string,
    role: string,
}




const UserManagement = () => {

    const [user, setUsers] = useState<User[]>([
        {
            id: "",
            name: "",
            email: "",
            imageUrl: "",
            role: "",
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
    async function createRandomUsers() {
        try {
          const response = await fetch('/api/admin/random', {
            method: 'POST',
          });
      
          if (response.ok) {
            console.log('Random users created successfully');
            // Refresh the user list or perform other actions as needed
          } else {
            console.error('Error creating random users');
          }
        } catch (error) {
          console.error('Error:', error);
        }
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
                <h2>List user</h2>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Name</TableHead>
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

        </div>
    );
}
export default UserManagement;