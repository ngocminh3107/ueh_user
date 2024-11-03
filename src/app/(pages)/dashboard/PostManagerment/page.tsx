"use client";
import Image from 'next/image';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

interface Post {
    title: string,
    content: string,
    imageUrl: string,
    id: string,
    userId: string
}




const PostManagement = () => {

    const [post, setPosts] = useState<Post[]>([
        {
            title: "",
            content: "",
            imageUrl: "",
            id: "",
            userId: ""
        }
    ])

    useEffect(() => {
        axios.get('/api/admin/postdata')
            .then((res) => {
                setPosts(res.data.data)
            })
            .catch((err) => {
                toast.error(err.response.data.error)
            }
            )
    }, [])


    const deletePost = (id: string) => {
        axios.delete('/api/admin/deletepost', { data: { id: id } })
            .then((res) => {
                toast.success("post deleted successfully")
                setPosts(post.filter((item) => item.id !== id))
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
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
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

            <section className="p-[30px] bg-white w-full rounded-[8px] text-black mt-7 hover:no-underline">
                <h2>List post</h2>
                <div className='grid grid-cols-4'>
                    <p>id</p>
                    <p className='col-span-2'>title</p>
                    <p>status</p>
                </div>
                {
                    post.map((item) => (

                        <Accordion type="single" collapsible key={item.id} className='w-full'>
                            <AccordionItem value="1" className='w-full'>
                                <AccordionTrigger>
                                    <div className='grid grid-cols-4 gap-5  justify-between w-full items-start'>
                                        <p className='text-left'>{item.id}</p>
                                        <p className='text-left col-span-2'>{item.title}</p>

                                        <div className='flex row'>
                                            <button className='bg-green-400 px-4 py-2 rounded-[4px]'
                                                onClick={createRandomUsers}
                                            >Edit</button>
                                            <button className='bg-red-400 px-4 py-2 rounded-[4px] ml-2'
                                                onClick={() => deletePost(item.id)}
                                            >Delete</button>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="font-medium">
                                        <img src={item.imageUrl} alt="" className='w-10 h-10' />
                                    </div>

                                    <p className="text-right">{item.content}</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>





                    ))
                }

            </section>

        </div>
    );
}
export default PostManagement;