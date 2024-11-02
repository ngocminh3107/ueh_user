import {
    FaUser,
    FaBell,
    FaClock
} from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
const NavUser = () => {
    const userSetting = [
        {
            icon: <FaUser />,
            label: 'account setting',
            link: '/account/setting'
        },
        {
            icon: <FaBell />,
            label: 'Email Preference',
            link: '/account/email-preference'
        },
        {
            icon: <BiSolidDollarCircle />,
            label: 'Payment Management',
            link: '/account/payment-'
        },
        {
            icon: <FaClock />,
            label: 'Transaction',
            link: '/account/transaction'
        },
    ]


    return (
        <div className="text-black bg-white font-BrutalType w-[300px] items-center">
            {userSetting.map((item, index) => (
                <div key={index} className="flex items-center text-center hover:bg-[#F2F2F2] rounded-md cursor-pointer py-[10px] px-5 uppercase font-bold">
                    <div className="p-2 text-[16px] items-center justify-center">
                        {item.icon}
                    </div>
                    <p className="text-[12px] text-medium p-1 text-nowrap">{item.label}</p>
                </div>
            ))
            }
        </div>
    )
}

export default NavUser  