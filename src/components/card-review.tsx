
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Demo from "@/assets/demo.png";
import { Link } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CardReviewProps {
    id: string;
    title: string;
    location: string;
    author: string;
    rating: number;
    description: string;
    views: number;
    comments: number;
    time: string;
    images: string;
}



const ReviewCard: React.FC<CardReviewProps> = ({ id, title, location, author, rating, description, views, time, comments, images }) => {
    const direction = useRouter();
    const handleClicked = () => {
        direction.push(`/review/${id}`);
    }

    return (    
      
        <div
            onClick={handleClicked}
            className=" flex flex-col rounded-[10px] bg-slate-200 shadow-lg mb-8 max-sm:p-1">
            <div className="m-8">
                <div className="flex items-center justify-between text-gray-600">
                    <h2 className="mb-2 text-2xl font-bold text-gray-800">{title}</h2>
                    <p className="mb-2 text-gray-600">Địa điểm: {location}</p>
                </div>
                <hr className="bg-slate-500 h-[4px]" />
                <div className="flex items-center my-4">
                    <Image
                        src={Demo}
                        className="w-10 h-10 me-4 rounded-full"
                        alt=""
                    />
                    <div className="font-medium dark:text-white">
                        <p className="text-black text-xl font-bold">{author}
                            <time dateTime={time} className="block text-sm text-gray-500 dark:text-gray-400">{time}</time></p>
                    </div>
                </div>
                <div className="flex items-center mb-4 space-x-1 rtl:space-x-reverse">
                    {/* Render các ngôi sao dựa trên rating */}
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`h-4 w-4 ${index < rating ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                </div>
                <p className="text-gray-600 flex-wrap max-w-[1300px]">{description}</p>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                    See more
                </a>
            </div>
            {/* image */}
            <div className="flex flex-row mx-8 gap-8 flex-wrap">

                <Image
                    src={Demo}
                    className="w-1/4 h-1/4 rounded-lg"
                    alt=""
                />
            </div>
            <hr className="m-4 mx-8 bg-slate-600 h-[2px]" />
            <div className="flex items-center justify-between text-gray-600 mx-8 mb-4">
                <span>{views} lượt xem</span>

                <span>{comments} bình luận</span>
            </div>
        </div>

    )
}
export default ReviewCard