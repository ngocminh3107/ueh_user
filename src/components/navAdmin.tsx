import {
    FaUser,
    FaBell,
    FaClock
} from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
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
            link: '/dashboard/post-management'
        },
        {
            icon: <BiSolidDollarCircle />,
            label: 'Review Management',
            link: '/dashboard/review-management'
        },
        {
            icon: <FaClock />,
            label: 'Event Managementy',
            link: '/dashboard/event-management'
        },
    ]


    return (
        <div className="text-black bg-white w-[300px] items-center rounded-[8px]">
            {userSetting.map((item, index) => (
                <div key={index} className="flex items-center text-center hover:bg-[#F2F2F2] rounded-md cursor-pointer py-[10px] px-5  ">
                    <div className="p-2 text-[16px] items-center justify-center">
                        {item.icon}
                    </div>
                    <p className="text-[14px] text-[#111c2d] p-1 text-nowrap line">{item.label}</p>
                </div>
            ))
            }
        </div>
    )
}

export default NavDashboard  