import {
    FaUser,
    FaBell,
    FaClock
} from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import Link  from "next/link";
const NavDashboard = () => {
    const userSetting = [
        {
            icon: <FaUser />,
            label: 'User Management',
            link: '/dashboard/user-management'
        },
        {
            icon: <FaBell />,
            label: 'Post Management',
            link: '/dashboard/PostManagerment'
        },
        {
            icon: <BiSolidDollarCircle />,
            label: 'User Managementt',
            link: '/dashboard/UserManagerment'
        },
        {
            icon: <FaClock />,
            label: 'Event Management',
            link: '/dashboard/EventManagerment'
        },
    ]


    return (
        <div className="text-black bg-white w-[300px] items-center rounded-[8px]">
            {userSetting.map((item, index) => (
                <Link key={index} href={item.link} className="flex items-center text-center hover:bg-[#F2F2F2] rounded-md cursor-pointer py-[10px] px-5  ">
                    <div className="p-2 text-[16px] items-center justify-center">
                        {item.icon}
                    </div>
                    <p className="text-[14px] text-[#111c2d] p-1 text-nowrap line">{item.label}</p>
                </Link>
            ))
            }
        </div>
    )
}

export default NavDashboard  