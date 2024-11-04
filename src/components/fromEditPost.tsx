"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { title } from "process";

const FormEditPost = (data: any) => {
    const router = useRouter();
    const [post, setPost] = React.useState({
        id: data.id,
        title: "",
        content: "",
        imageUrl: "",
    })
    const onUpdate = async () => {
        try {
            const response = await axios.put("/api/admin/editpost", post);
            console.log("Update success", response.data);
            router.push("/account");
            window.location.reload();
        } catch (error: any) {
            console.log("Update failed", error.message);
        }
    }

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    useEffect(() => {
        if (post.title.length >0 && post.content.length > 0 && post.imageUrl.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [post]);




    return (
        <div className="w-[350px] pb-[60px] text-black">
            <div className=" pb-5 text-center">
                <p className="text-[30px]">Add Your New Email Address</p>
            </div>
            <div className="pt-[35px]">
                <p className="text-sm">A security code verification is required to make this change. You will not be able to change this email address again for 90 days after this change is saved to this account.</p>
            </div>
            <div className="pt-[35px]">
                <p className="text-sm">New title post</p>
                <input
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    className="w-full h-10 border-2 border-[#E0E0E0] rounded-md px-3 mt-2" type="text" />
            </div>
            <div className="pt-[35px]">
                <p className="text-sm">New content</p>
                <input
                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                    className="w-full h-10 border-2 border-[#E0E0E0] rounded-md px-3 mt-2" type="text" />
            </div>
            <div className="pt-[35px]">
                <p className="text-sm">New image url</p>
                <input
                    onChange={(e) => setPost({ ...post, imageUrl: e.target.value })}
                    className="w-full h-10 border-2 border-[#E0E0E0] rounded-md px-3 mt-2" type="text" />
            </div>
            <div className="mt-10">
                <button
                    onClick={onUpdate}
                    className={`  text-white uppercase text-sm font-bold w-full py-4 ${buttonDisabled ? "bg-[#0074E450]" : "bg-[#0074E4]"}`}>confirm</button>
                <button
                    onClick={onUpdate}
                    className={`  text-black uppercase text-sm font-bold w-full py-4 mt-[15px] bg-[#E0E0E0]`}>cancel</button>
            </div>
        </div>
    )
}

export default FormEditPost