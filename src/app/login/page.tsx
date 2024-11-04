"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Logo from "@/assets/MYUEH_logo.png";
import Login from "@/assets/login.jpg";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        mssv: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/user/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.mssv.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="grid grid-cols-6 bg-[#F0F5F9] w-full">
            <div className="flex grip col-span-4">
                <Image className="w-full" src={Login} alt={""} />
            </div>
            <div className="flex flex-col justify-center min-h-screen py-2 grip col-span-2 px-5 ">
                <div className="flex flex-col items-center justify-center">
                    <Image src={Logo} alt={""} />
                    <h1 className="m-4 text-black">
                        {loading ? "Processing" : "Đăng nhập hệ thống"}
                    </h1>
                </div>
                <input
                    className="p-2 border border-[#005E69] rounded-xl mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="mssv"
                    type="text"
                    value={user.mssv}
                    onChange={(e) => setUser({ ...user, mssv: e.target.value })}
                    placeholder="mssv"
                />
                <input
                    className="p-2 border border-[#005E69] rounded-xl mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                />
                <div className="flex justify-start p-0 m-0 ">
                    <AlertDialog >
                        <AlertDialogTrigger asChild>
                            <Button className="text-black mb-2 p-0" >
                                Xem hướng dẫn
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white p-5">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-black">Hướng dẫn đăng nhập</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <div className="text-black"> 1. Sinh viên, học viên đăng nhập bằng cách:
                                        - Sử dụng tài khoản Sinh viên (tại trang https://student.ueh.edu.vn) để đăng nhập.
                                        - Sử dụng Email UEH (@st.ueh.edu.vn) để đăng nhập.</div>
                                    <div className="text-black">2. Lưu ý:
                                        - Quên mật khẩu tài khoản Sinh viên: tại đây.
                                        - Quên mật khẩu tài khoản Email ST: tại đây.
                                        - Quên cả mật khẩu tài khoản Sinh viên và Email:
                                        + Người học hiện tại liên hệ các đơn vị quản lý đào tạo phụ trách (Phòng Đào tạo/Phòng Đào tạo thường xuyên/Viện Đào tạo Sau đại học)
                                        + Cựu người học liên hệ Phòng Chăm sóc và hỗ trợ người học (DSA) - 028 7306 1976 ext 1007 & 1009 - dsa@ueh.edu.vn</div>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="text-black">x</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
                <div className="flex row justify-between">
                    <div className="text-black mb-4" >
                        <Checkbox id="terms" />
                        Ghi nhớ đăng nhập
                    </div>
                    <div className="text-black underline mb-4" >
                        Quên mật khẩu
                    </div>
                </div>
                <button
                    onClick={onLogin}
                    className="p-2  border w-full bg-[#005E69] rounded-xl mb-4 focus:outline-none focus:border-gray-600"
                >
                    Đăng nhập
                </button>
            </div>
        </div>
    );
}
