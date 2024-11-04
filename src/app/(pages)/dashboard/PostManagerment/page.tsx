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
import Demo from "@/assets/demo.png"



interface Post {
    id: string,
    title: string,
    description: string,
    images: string,
    time: string,
    location: string,
    views: string,
    comments: string,
    rating: string,
    author: string,
    createdAt: string,
}

const PostManagement = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [updatedPost, setUpdatedPost] = useState<Post | null>(null);
    const imageList = [
        {
            id: 1,
            url: Demo,
        },
        {
            id: 2,
            url: Demo,
        },
        {
            id: 3,
            url: Demo,
        },
        {
            id: 4,
            url: Demo,
        },
    ];
    useEffect(() => {
        axios.get('/api/admin/postdata')
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((err) => {
                toast.error(err.response.data.error);
            });
    }, []);

    const deletePost = (id: string) => {
        axios.delete('/api/admin/deletepost', { data: { id: id } })
            .then((res) => {
                toast.success("Post deleted successfully");
                setPosts(posts.filter((item) => item.id !== id));
            })
            .catch((err) => {
                toast.error(err.response.data.error);
            });
    };

    const editPost = (post: Post) => {
        setEditingPost(post);
        setUpdatedPost(post);
    };

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!updatedPost) return;

        axios.put(`/api/admin/editpost`, updatedPost)
            .then((res) => {
                toast.success("Post updated successfully");
                setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
                setEditingPost(null);
            })
            .catch((err) => {
                toast.error(err.response.data.error);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!updatedPost) return;
        setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className='bg-white rounded-[8px] flex row justify-between items-center min-w-full'>
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
                    <Image
                        src='/images/undraw_Web_search_re_efla.svg'
                        width={20}
                        height={20}
                        alt='search'
                    />
                </div>
            </div>
            <section className="p-[30px] bg-white w-full rounded-[8px] text-black mt-7 hover:no-underline">
                <h2>List post</h2>
                <div className='grid grid-cols-4'>
                    <p>id</p>
                    <p className='col-span-2'>title</p>
                    <p>status</p>
                </div>
                {posts.map((item) => (
                    <Accordion type="single" collapsible key={item.id} className='w-full'>
                        <AccordionItem value="1" className='w-full'>
                            <AccordionTrigger>
                                <div className='grid grid-cols-4 gap-5 justify-between w-full items-start'>
                                    <p className='text-left'>{item.id}</p>
                                    <p className='text-left col-span-2'>{item.title}</p>
                                    <div className='flex row'>


                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <button className='bg-green-400 px-4 py-2 rounded-[4px]'
                                                    onClick={() => editPost(item)}
                                                >Edit</button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>

                                                <form onSubmit={handleUpdate} className="p-5 rounded-[8px] h-[700px] w-[700px] bg-white  text-black">
                                                    <h2>Edit Post</h2>
                                                    <div>
                                                        <label htmlFor="title">Title:</label>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            value={updatedPost?.title || ''}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="content">Content:</label>
                                                        <textarea
                                                            name="content"
                                                            value={updatedPost?.description || ''}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border h-20"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="imageUrl">Image URL:</label>
                                                        <input
                                                            type="text"
                                                            name="imageUrl"
                                                            value={updatedPost?.images || ''}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border"
                                                        />
                                                    </div>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel onClick={() => setEditingPost(null)} className="  bg-gray-500 text-white px-4 py-2 rounded">Cancel</AlertDialogCancel>
                                                        <AlertDialogAction type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded">Update</AlertDialogAction>
                                                    </AlertDialogFooter>

                                                </form>

                                            </AlertDialogContent>
                                        </AlertDialog>

                                        <button className='bg-red-400 px-4 py-2 rounded-[4px] ml-2'
                                            onClick={() => deletePost(item.id)}
                                        >Delete</button>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent >
                                <div className='gap-4 flex col h-full'>
                                    <div className=' bg-blue-500 rounded-[8px] p-[1px] relative'>
                                        <div className='w-2.5 h-2.5 bg-white mt-1 rounded-[10px]'>
                                        </div>
                                        <div className=' w-2.5 h-2.5 bg-white mt-[130px] rounded-[10px]'>
                                        </div>
                                        <div className=' w-2.5 h-2.5 bg-white  rounded-[10px] absolute bottom-[4px]'>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h3 className='mb-2'><b>Image</b></h3>
                                        <div className="font-medium flex row">
                                            {imageList.map((image) => (

                                                <div key={image.id} className="flex row">
                                                    <Image src={image.url} alt="demo" className='mr-2' width={100} height={100} />
                                                </div>
                                            ))}
                                        </div>
                                        <h3 className='mb-2 mt-3'><b>Content</b></h3>
                                        <p className="">{item.description}</p>
                                        <h3 className=' mt-3'><b>Content</b></h3>

                                    </div>
                                </div>


                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </section>


        </div>
    );
};

export default PostManagement;
