"use client"; 

import Demo from "@/assets/demo.png";
import { StaticImageData } from 'next/image';
import EventCard from "@/components/card-event";
import React, { useState } from "react";

interface Event {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
    time: string;
    location: string;
    registeredCount: number;
    maxCapacity: number;
}

const EventPage: React.FC = () => {
    const events: Event[] = [
        {
            id: 1,
            title: 'Hội thảo Công nghệ 4.0',
            description: 'Hội thảo về các xu hướng công nghệ mới trong thời đại 4.0, bao gồm trí tuệ nhân tạo, IoT và blockchain.',
            image: Demo,
            time: '15/10/2024, 8:00 AM',
            location: 'Hội trường A, UEH',
            registeredCount: 5,
            maxCapacity: 10,
        },
        {
            id: 2,
            title: 'Ngày hội Khởi nghiệp Sáng tạo',
            description: 'Sự kiện dành cho các startup với nhiều cơ hội kết nối và gọi vốn từ các nhà đầu tư.',
            image: Demo,
            time: '20/10/2024, 9:00 AM',
            location: 'Trung tâm Sáng tạo Đổi mới, TP. Hồ Chí Minh',
            registeredCount: 8,
            maxCapacity: 15,
        },
        {
            id: 3,
            title: 'Workshop Kỹ năng Lãnh đạo',
            description: 'Buổi workshop giúp phát triển các kỹ năng lãnh đạo và quản lý nhóm hiệu quả.',
            image: Demo,
            time: '25/10/2024, 2:00 PM',
            location: 'Phòng họp B, UEH',
            registeredCount: 12,
            maxCapacity: 20,
        },
        {
            id: 4,
            title: 'Hội thảo Thương mại Điện tử',
            description: 'Chia sẻ về các xu hướng thương mại điện tử trong tương lai và cách xây dựng chiến lược kinh doanh.',
            image: Demo,
            time: '30/10/2024, 10:00 AM',
            location: 'Hội trường C, Đại học Kinh tế',
            registeredCount: 7,
            maxCapacity: 30,
        },
        {
            id: 5,
            title: 'Khóa học Machine Learning',
            description: 'Khóa học giới thiệu về các thuật toán học máy cơ bản và ứng dụng thực tế.',
            image: Demo,
            time: '05/11/2024, 1:00 PM',
            location: 'Trung tâm Công nghệ Thông tin, UEH',
            registeredCount: 20,
            maxCapacity: 25,
        },
        {
            id: 6,
            title: 'Seminar An toàn Thông tin',
            description: 'Tìm hiểu về các giải pháp bảo mật mạng và an toàn thông tin trong kỷ nguyên số.',
            image: Demo,
            time: '10/11/2024, 9:00 AM',
            location: 'Hội trường E, Đại học Công nghệ Thông tin',
            registeredCount: 15,
            maxCapacity: 25,
        },
        {
            id: 7,
            title: 'Hội thảo Đổi mới Sáng tạo',
            description: 'Khám phá các xu hướng đổi mới sáng tạo và ứng dụng trong doanh nghiệp.',
            image: Demo,
            time: '15/11/2024, 8:00 AM',
            location: 'Trung tâm Triển lãm SECC, TP. Hồ Chí Minh',
            registeredCount: 30,
            maxCapacity: 40,
        },
        {
            id: 8,
            title: 'Hội thảo Blockchain và Tài chính',
            description: 'Hội thảo về ứng dụng của công nghệ blockchain trong ngành tài chính.',
            image: Demo,
            time: '20/11/2024, 10:00 AM',
            location: 'Hội trường A, UEH',
            registeredCount: 18,
            maxCapacity: 25,
        },
        {
            id: 9,
            title: 'Khóa học Lập trình Web',
            description: 'Khóa học nền tảng về lập trình web dành cho sinh viên CNTT.',
            image: Demo,
            time: '25/11/2024, 1:00 PM',
            location: 'Phòng máy 204, Đại học Khoa học Tự nhiên',
            registeredCount: 10,
            maxCapacity: 15,
        },
        {
            id: 10,
            title: 'Hội thảo AI và Cuộc sống',
            description: 'Thảo luận về tác động của trí tuệ nhân tạo đối với cuộc sống con người.',
            image: Demo,
            time: '30/11/2024, 3:00 PM',
            location: 'Hội trường D, UEH',
            registeredCount: 22,
            maxCapacity: 30,
        },
    ];
    const eventsPerPage = 3;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(events.length / eventsPerPage);
    const startIndex = (currentPage - 1) * eventsPerPage;
    const currentEvents = events.slice(startIndex, startIndex + eventsPerPage);

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="flex w-screen flex-col items-center justify-center bg-white">
                {/* <div className="m-8 w-full">
                    <p className="font-poppins mb-2 ml-14 text-2xl text-green-500">Review Cơ sở</p>
                    <h1 className="font-poppins ml-14 text-2xl">
                        Chúng tôi làm việc để đưa UEH đến gần bạn hơn – Bạn hiểu UEH hơn, UEH hiểu bạn hơn.
                    </h1>
                </div> */}
                <div>
                    {currentEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            title={event.title}
                            location={event.location}
                            description={event.description}
                            image={event.image}
                            id={event.id}
                            time={event.time}
                            registeredCount={event.registeredCount}
                            maxCapacity={event.maxCapacity}
                        />
                    ))}
                </div>
                {/*  */}
                <div className="flex justify-center mb-4">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                        disabled={currentPage === 1} 
                        className="px-4 py-2 border rounded-xl bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                    >
                        Trước
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index + 1} 
                            onClick={() => setCurrentPage(index + 1)} 
                            className={`px-4 mx-2 py-2 border rounded-2xl ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                        disabled={currentPage === totalPages} 
                        className="px-4 py-2 border rounded-xl bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                    >
                        Sau
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
