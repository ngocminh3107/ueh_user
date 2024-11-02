"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { PiWarningCircleBold } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import FormEditName from "@/components/formEdit.name.user";
import FormEditEmail from "@/components/fromEdit.email.user";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import PersonalDetails from "@/components/personalDetails.user";

export default function UserProfile() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        name: "",
    })
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        imageUrl: "",
        role: "",
    })

    const languages = ["English", "Spanish", "Chinese", "Hindi", "Arabic", "Portuguese", "Bengali", "Russian", "Japanese", "Punjabi",
        "German", "Javanese", "Telugu", "Marathi", "Turkish", "Tamil", "French", "Urdu", "Italian", "Vietnamese",
        "Korean", "Hausa", "Thai", "Filipino", "Yoruba", "Burmese", "Malay", "Pashto", "Kannada", "Odia"]
    const countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
    ];


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
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    }


    const onUpdate = async () => {
        try {
            const response = await axios.put("/api/user/userEdit", user);
            console.log("Update success", response.data);
            router.push("/account");
        } catch (error: any) {
            console.log("Update failed", error.message);
            toast.error(error.message);
        }
    }

    return (
        <div className="flex flex-col min-h-screen w-full font-BrutalType  bg-white  p-10">
            <p className="text-[30px] text-[#141414]">Account Setting</p>
            <p className="mt-[15px] text-[#141414B8]">Manage your account’s details.</p>
            <p className="text-[#141414] mt-[30px] text-lg font-bold" >Account Infomation</p>
            <p className="text-sm text-[#141414] mt-5 mb-[25px]"><label htmlFor="" className="font-bold mr-1">ID:</label>{data.id}</p>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex row gap-2.5 w-full ">
                    <div className="bg-[#EFEFEF] flex row justify-between items-center w-full rounded-lg max-h-[60px]">
                        <div className=" text-[#898989]">
                            <p className="text-[#898989] text-sm transform translate-x-1.5 translate-y-0.75 scale-75">Display Name</p>
                            <p className="ml-4 mt-1.5 text-sm">
                                {data.name}
                            </p>
                        </div>
                        <div className="mr-2">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <div className="p-2 rounded-[5px] hover:bg-[#141414]">
                                        <PiWarningCircleBold className="text-[#898989] text-2xl " />

                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent className="text-[#141414]">
                                    <b>Please note:</b>  If you changed your Epic Games display name, you can{"'"}t change it again for 2 weeks after you confirm this change.
                                </HoverCardContent>
                            </HoverCard>
                        </div>

                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div
                                className="bg-[#0074e4] hover:bg-[#0061bf] py-4 px-4 max-h-[60px] rounded-[5px]"
                            >
                                <FaEdit className="text-3xl" />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[470px] overflow-x-hidden overflow-y-auto max-h-[650px]">
                            <FormEditName data={data} />

                        </DialogContent>
                    </Dialog>
                </div>
                <div className="flex row gap-2.5 w-full ">
                    <div className="bg-[#EFEFEF] flex row justify-between items-center w-full rounded-lg max-h-[60px]">
                        <div className=" text-[#898989]">
                            <p className="text-[#898989] text-sm transform translate-x-[-10px] translate-y-0.75 scale-75">Email </p>
                            <p className="ml-4 mt-1.5 text-sm">
                                {data.email}
                            </p>
                        </div>

                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div
                                className="bg-[#0074e4] hover:bg-[#0061bf] py-4 px-4 max-h-[60px] rounded-[5px]"
                            >
                                <FaEdit className="text-3xl" />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[470px] overflow-x-hidden overflow-y-auto max-h-[650px]">
                            <FormEditEmail data={data} />

                        </DialogContent>
                    </Dialog>
                </div>

                <div className=" w-full">
                    <Select>
                        <SelectTrigger className="w-full flex-col">
                            <p className="text-[12px] text-[#141414B8]">Preferred language communication</p>
                            <SelectValue placeholder="English" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                languages.map((language, index) => {
                                    return <SelectItem key={index} value={language} className="text-[#141414]">{language}</SelectItem>
                                })
                            }
                        </SelectContent>
                    </Select>
                    <p className="text-[12px] text-[#141414B8] mt-[7px]">
                        Choose your preferred language for emails from Epic Games.
                    </p>
                </div>
            </div>
            <div>
                <p className="text-[#141414] mt-[52px] font-bold text-lg mb-5">Personal Details</p>
                <p className="text-sm text-[#141414B8]">
                    Manage your name and contact info. These personal details are private and will not be displayed to other users. View our {" "}
                    <Link href="/privacy" passHref className="text-[#0074E4]">
                        Privacy Policy
                    </Link>
                </p>
                <div className="text-[#141414B8] grid gap-6 grid-cols-2 mt-2.5">
                    <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div >
                <p className="text-[#141414] mt-[52px] font-bold text-lg mb-2.5">Address</p>
                <div className="grid gap-2">
                    <div className="text-[#141414B8] grid gap-6 grid-cols-2">
                        <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                            id="firstName"
                            type="text"
                            placeholder="Address Line 1"
                        />
                        <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                            id="lastName"
                            type="text"
                            placeholder="Address Line 2"
                        />
                    </div>
                    <div className="grid gap-6 grid-cols-2">
                        <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                            id="address"
                            type="text"
                            placeholder="City"
                        />
                        <div className="grid gap-6 grid-cols-2">
                            <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                                id="address"
                                type="text"
                                placeholder="Region"
                            />
                            <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                                id="address"
                                type="text"
                                placeholder="Postal Code"
                            />
                        </div>

                    </div>
                    <div className="grid gap-6 grid-cols-2  mt-4">
                        <div className=" w-full">
                            <Select>
                                <SelectTrigger className="w-full flex-col">
                                    <p className="text-[12px] text-[#141414B8]">Country / Region</p>
                                    <SelectValue placeholder="VIETNAM" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        countries.map((countries, index) => {
                                            return <SelectItem key={index} value={countries} className="text-[#141414]">{countries}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>

                        </div>

                    </div>
                </div>
                <button
                    className="p-2  rounded-[6px] mt-10 bg-[#0076e480] focus:outline-none hover:bg-[#0076e480] text-white font-semibold px-8 py-4 uppercase text-xs min-h-[60px]">Save Changes</button>
            </div>
            <div>
                <p className="text-[#141414] mt-[52px] font-bold text-lg mb-5">Company</p>
                <p className="text-sm text-[#141414B8]">
                    Manage your company information used for business receipts for your purchase(s).
                    <Link href="/privacy" passHref className="text-[#0074E4]">
                        {" "}Learn more
                    </Link>
                </p>
                <p className="font-bold text-sm text-[#141414]">If you are registered for VAT, you may not be charged VAT on your purchase. To get started, enter your COMPANY VAT NUMBER.</p>
                <div className="text-[#141414B8] grid gap-6 grid-cols-2 mt-2.5">
                    <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                        id="firstName"
                        type="text"
                        placeholder="Company Name"
                    />
                    <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                        id="lastName"
                        type="text"
                        placeholder="Company VAT Number"
                    />
                </div>
            </div>

            <div >
                <p className="text-[#141414] mt-[52px] font-bold text-lg mb-2.5">Company Address</p>
                <div className="grid gap-2">
                    <div className="text-[#141414B8] grid gap-6 grid-cols-2">
                        <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                            id="firstName"
                            type="text"
                            placeholder="Address Line 1"
                        />
                        <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                            id="lastName"
                            type="text"
                            placeholder="Address Line 2"
                        />
                    </div>
                    <div className="grid gap-6 grid-cols-2">
                        <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                            id="address"
                            type="text"
                            placeholder="City"
                        />
                        <div className="grid gap-6 grid-cols-2">
                            <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                                id="address"
                                type="text"
                                placeholder="Region"
                            />
                            <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-4 px-[30px] py-5  focus:outline-none"
                                id="address"
                                type="text"
                                placeholder="Postal Code"
                            />
                        </div>

                    </div>
                </div>
                <button
                    className="p-2  rounded-[6px] mt-10 bg-[#0076e480] focus:outline-none hover:bg-[#0076e480] text-white font-semibold px-8 py-4 uppercase text-xs min-h-[60px]">Save Changes</button>
            </div>

            <div>
                <p className="text-[#141414] mt-[100px] font-bold text-lg mb-5">Download Account Information
                </p>
                <p className="text-sm text-[#141414B8]">
                    Create and download a copy of the information you’ve shared with us. You will need to enable

                    <Link href="/privacy" passHref className="text-[#0074E4]">
                        {" "}Two-Factor Authentication{" "}
                    </Link>
                    and verify your email address to continue.
                </p>
            </div>
            <div>
                <p className="text-[#141414] mt-[100px] font-bold text-lg mb-5">Delete Account
                </p>
                <p className="text-sm text-[#141414B8]">
                    Click REQUEST ACCOUNT DELETE to start the process of permanently deleting your Epic
                    Games account including all personal information, purchases, game progress, in-game
                    content, Unreal projects and Epic Games Wallet account. Once your Epic Games account
                    is deleted, your wallet balance will be permanently deleted as well.
                </p>
                <p className="font-bold text-sm text-[#141414] mt-5">If you request to delete your account,
                    your account will be deleted in 14 days. During this time, you can login to reactivate your
                    account, which will cancel your deletion. After 14 days deletion will be irreversible.</p>
                <button
                    className="p-2  rounded-[6px] mt-10 bg-[#DE3341] focus:outline-none hover:bg-[#DE3341CC] text-white font-semibold px-8 py-4 uppercase text-xs min-h-[60px]">Request  Delete Account</button>

            </div>
        </div>
    )
}