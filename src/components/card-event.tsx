
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Demo from "@/assets/demo.png";

interface CardReviewProps {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData; 
    time: string;
    location: string;
    registeredCount: number;
    maxCapacity: number;
}

const EventCard: React.FC<CardReviewProps> = ({ title, location, description, image, maxCapacity,  registeredCount}) => {
    const truncateText = (text: string, maxLength: number): React.ReactNode => {
        if (text.length > maxLength) {
            return (
                <>
                    {text.slice(0, maxLength)}...
                    <a
                        href="#"
                        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white ml-1"
                    >
                        See more
                    </a>
                </>
            );
        }
        return text;
    };

    return (
        <div className="flex flex-row rounded-[10px] bg-slate-200 shadow-lg mb-8 max-sm:flex-col max-sm:p-2">
        {/* image container with padding */}
        <div className="p-4 sm:w-1/3 max-sm:w-full">
            <Image
                src={Demo}
                alt={title}
                className="transform transition-transform duration-300 hover:scale-105 rounded-[10px] w-full h-auto object-cover"
            />
        </div>
        <div className="m-8 max-sm:m-4 flex-1">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">{title}</h2>
            <p className="mb-2 text-gray-600">Địa điểm: {location}</p>
            <p className="mb-2 text-gray-600 flex-wrap max-w-[1000px]">
                {truncateText(description, 500)}
            </p>
            <p className="mb-2 text-gray-600">Số lượng: {maxCapacity}</p>
            <p className="mb-2 text-gray-600">Đã đăng: {registeredCount}</p>
        </div>
    </div>
    )
}

export default EventCard