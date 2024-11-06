"use client";
import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbUserCode } from "react-icons/tb";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { icons } from "lucide-react";
import { FaUser } from "react-icons/fa";
interface User {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  role: string;
  mssv: string;
  password: string;
}

const UserManagement = () => {
  const router = useRouter();
  const [editingUser, setEditingUser] = React.useState<User | null>(null);
  const [newuser, setnewUser] = React.useState({
    email: "",
    password: "",
    name: "",
    mssv: "",
    imageUrl: "",
  });

  const editUser = (user: User) => {
    setEditingUser(user);
    setEditingUser(user);
  };

    const updateUser = async () => {
        try {
        const response = await axios.put("/api/admin/edituser", editingUser);
        console.log("Update user successfully", response.data);
        toast.success("Update user successfully");
        const updateList = await axios.get("/api/admin/userdata");
        setUsers(updateList.data.data);
        } catch (error: any) {
        console.log("Update user failed", error.message);
        toast.error(error.message);
        }
    };


    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!editingUser) return;

        axios.put(`/api/admin/editpost`, editingUser)
            .then((res) => {
                toast.success("Post updated successfully");
                setUsers(user.map(user => user.id === editingUser.id ? editingUser : user));
                setEditingUser(null);
            })
            .catch((err) => {
                toast.error(err.response.data.error);
            });
    };



  const dataInput = [
    {
        id: 0,
        label: "Image",
        icon: <FaUser />,
        type: "text",
        placeholder: "Image",
        value: newuser.imageUrl,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setnewUser({ ...newuser, imageUrl: e.target.value }),
    },
    {
      id: 1,
      label: "Username",
      icon: <FaUser />,
      type: "text",
      placeholder: "Username",
      value: newuser.name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setnewUser({ ...newuser, name: e.target.value }),
    },
    {
      id: 2,
      label: "MSSV",
      icon: <TbUserCode />,
      type: "text",
      placeholder: "MSSV",
      value: newuser.mssv,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setnewUser({ ...newuser, mssv: e.target.value }),
    },
    {
      id: 3,
      label: "Email",
      icon: <MdAlternateEmail />,
      type: "text",
      placeholder: "Email",
      value: newuser.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setnewUser({ ...newuser, email: e.target.value }),
    },
    {
      id: 4,
      label: "Password",
      icon: <RiLockPasswordLine />,
      type: "password",
      placeholder: "Password",
      value: newuser.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setnewUser({ ...newuser, password: e.target.value }),
    },
  ];

  const [user, setUsers] = useState<User[]>([
    {
      id: "",
      name: "",
      email: "",
      imageUrl: "",
      role: "",
      mssv: "",
      password: "",
    },
  ]);

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/user/signup", newuser);
      console.log("Thêm sinh viên thành công", response.data);
      toast.success("Thêm sinh viên thành công!");
      const updateList = await axios.get("/api/admin/userdata");
      setUsers(updateList.data.data);
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    axios
      .get("/api/admin/userdata")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  }, []);

  const deleteUser = (id: string) => {
    axios
      .delete("/api/admin/delete", { data: { id: id } })
      .then((res) => {
        toast.success("User deleted successfully");
        setUsers(user.filter((item) => item.id !== id));
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <div>
      <div className="bg-white rounded-[8px]  flex row  justify-between items-center min-w-full">
        <div className="flex justify-between items-center px-5 py-5 w-full">
          <h2 className="text-black">Dashboard</h2>
        </div>
        <div>
          <div>
            <Image
              src="/images/undraw_Web_search_re_efla.svg"
              width={20}
              height={20}
              alt="search"
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
                <button className="bg-green-400 px-4 py-2 rounded-[4px]">
                  add new user
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white px-6 py-8 rounded-[6px] ">
                <div></div>
                <div className="p-3 relative flex flex-col w-full border border-black border-solid bg-zinc-300 bg-opacity-0">
                  <div className="bg-white px-1 py-0 top-[-26px] left-[20px] absolute text-[#5E4D3F]">
                    <h2 className="font-bold text-[32px]">Register</h2>
                  </div>
                  <div className="mt-2">
                    <p className="text-[#7C6A59] text-[16px]">
                      Create new account
                    </p>
                    {dataInput.map((item) => (
                      <div
                        key={item.id}
                        className="text-black
                        bg-[#4B4C4C]
                        mt-5
                        px-2
                        py-2
                        rounded-[4px]
                        flex row
                        justify-center
                        items-center
                        min-w-[300px]
                    "
                      >
                        <div className="text-white">{item.icon}</div>
                        <input
                          type={item.type}
                          placeholder={item.placeholder}
                          value={item.value}
                          onChange={item.onChange}
                          className="outline-none bg-transparent  w-full  text-white text-sm ml-2 placeholder:text-white placeholder:font-thin placeholder:text-[12px]"
                        />
                      </div>
                    ))}
                  </div>

                  <AlertDialogFooter>
                    <div className="flex flex-col w-full mt-4">
                      <AlertDialogCancel className="  bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={onSignup}
                        type="submit"
                        className=" bg-[#7C6A59] text-white px-4 py-2 rounded hover:bg-[#5E4D3F] mt-2"
                      >
                        Add new user
                      </AlertDialogAction>
                    </div>
                  </AlertDialogFooter>
                </div>
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
              <TableHead className="text-warp w-[200px]">password</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="text-right">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="">
                    <img src={item.imageUrl} alt="" />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.mssv}</TableCell>
                <TableCell>{item.password}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell className="text-right">
                  <button
                    onClick={() => editUser(item)}
                    className="bg-green-400 px-4 py-2 rounded-[4px] mr-2"
                  >
                    Edit
                  </button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="bg-red-400 px-4 py-2 rounded-[4px]">
                        Delete
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white px-6 py-8 rounded-[6px] ">
                      <AlertDialogHeader className="text-black">
                        Delete User
                      </AlertDialogHeader>
                      <AlertDialogDescription className="text-black">
                        Are you sure you want to delete this user?
                      </AlertDialogDescription>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteUser(item.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default UserManagement;
