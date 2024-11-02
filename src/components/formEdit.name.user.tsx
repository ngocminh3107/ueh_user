"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormEditName = (data: any) => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
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

  const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const handleOnChange = (e: any) => {
    setChecked(e.target.checked);
  }
  useEffect(() => {
    if (user.name.length > 0 && checked) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user, checked]);




  return (
    <div className="w-[350px] pb-[60px]">
      <div className=" pb-5 text-center">
        <p className="text-[30px]">Confirm display name change</p>
      </div>
      <div className="pt-[35px]">
        <p className="text-sm"><b>Please note:</b>If you changed your Epic Games display name, you can`t change it again for 2 weeks after you confirm this change.</p>
        <p className="text-sm mt-[15px]"><b>Current Display Name: </b>{data.data.name}</p>
      </div>
      <input className="transition-input w-full text-sm bg-transparent border border-gray-300 focus:border-black rounded-[4px] mt-3 px-[30px] py-5  focus:outline-none"
        id="username"
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="New Display Name"
      />
      <div className="mt-5 bg-[#F4F4F4] px-5 py-3.5">
        <ul className="list-disc  text-sm ml-5 text-[#141414]">
          <li className="">
            Never use information that identifies you such as your real name, address, social media handle or phone number
          </li>
          <li>
            Display Names must be at least 3 characters long
          </li>
        </ul>
      </div>
      <div className="mt-5 flex row text-[#141414B8] text-sm">

        <input type="checkbox"
          onClick={handleOnChange}
        />
        <p className="ml-2.5">
          I understand I can not change my display name again for 2 weeks after this change.
        </p>
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

export default FormEditName