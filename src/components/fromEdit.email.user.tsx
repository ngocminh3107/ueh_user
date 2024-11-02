"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormEditEmail = (data: any) => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
    })
    const onUpdate = async () => {
        try {
            const response = await axios.put("/api/user/userEdit", user);
            console.log("Update success", response.data);
            router.push("/account");
            window.location.reload();
        } catch (error: any) {
            console.log("Update failed", error.message);
        }
    }

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    useEffect(() => {
        if (user.email.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);




    return (
        <div className="w-[350px] pb-[60px]">
            <div className=" pb-5 text-center">
                <p className="text-[30px]">Add Your New Email Address</p>
            </div>
            <div className="pt-[35px]">
                <p className="text-sm">A security code verification is required to make this change. You will not be able to change this email address again for 90 days after this change is saved to this account.</p>
            </div>
            <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                id="username"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="New Email Address"
            />

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

export default FormEditEmail