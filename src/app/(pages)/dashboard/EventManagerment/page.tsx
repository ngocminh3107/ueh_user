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

interface Event{
    id: string,
    title: string,
    location: string,
    description: string,
    time: string,
    registerCount:string,
    maxCapacity: string,
    content: string,
    imageUrl: string,
    createdAt: string,
    userId: string
}



const EventManagement = () => {

    const [event, setEvents] = useState<Event[]>([
        {
            id: "",
            title: "",
            location: "",
            description: "",
            time: "",
            registerCount: "",
            maxCapacity: "",
            content: "",
            imageUrl: "",
            createdAt: "",
            userId: ""
        }
    ])

    useEffect(() => {
        axios.get('/api/admin/eventdata')
            .then((res) => {
                setEvents(res.data.data)
            })
            .catch((err) => {
                toast.error(err.response.data.error)
            }
            )
    }, [])



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
                            <TableHead className="w-[100px]">id</TableHead>
                            <TableHead>title</TableHead>
                            <TableHead>location</TableHead>
                            <TableHead>description</TableHead>
                            <TableHead>time</TableHead>
                            <TableHead>registerCount</TableHead>
                            <TableHead>maxCapacity</TableHead>
                            <TableHead>content</TableHead>
                            <TableHead>imageUrl</TableHead>
                            <TableHead>userId</TableHead>
                            <TableHead>createdAt</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            event.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{item.time}</TableCell>
                                    <TableCell>{item.registerCount}</TableCell>
                                    <TableCell>{item.maxCapacity}</TableCell>
                                    <TableCell>{item.content}</TableCell>
                                    <TableCell>{item.imageUrl}</TableCell>
                                    <TableCell>{item.userId}</TableCell>
                                    <TableCell>{item.createdAt}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>


            </div>

        </div>
    );
}
export default EventManagement;