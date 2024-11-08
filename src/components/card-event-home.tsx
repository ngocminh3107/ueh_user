"use client";
import { useEffect, useState } from 'react';
import Demo from "@/assets/demo.png";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
interface EventItem {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
    time: string;
    location: string;
    avatar: string;
    rating: number;
    views: number;
    comments: number;
}

const EventsHomePage: React.FC = () => {
    const items: EventItem[] = [
        {
            id: 1,
            title: 'Viết về cơ sở 1',
            description:
                'Tôi rất ấn tượng với môi trường học tập và giảng dạy tại Trường Trung học XYZ. Trường có cơ sở vật chất hiện đại với các phòng học rộng rãi, thoáng mát và đầy đủ trang thiết bị. Phòng thí nghiệm khoa học và công nghệ luôn được cập nhật với các thiết bị mới, giúp học sinh có thể học thực hành và phát triển kỹ năng thực tế ngay từ sớm. Điểm đặc biệt của XYZ chính là đội ngũ giáo viên tâm huyết và tận tụy. Giáo viên ở đây luôn sẵn lòng hỗ trợ học sinh không chỉ trong học tập mà cả trong cuộc sống, góp phần tạo nên môi trường thân thiện và tích cực. Học sinh luôn được khuyến khích khám phá, phát triển khả năng bản thân, từ đó nâng cao sự tự tin và độc lập.',
            image: Demo,
            time: '10/10/2024, 9:00 AM',
            location: 'Hội trường A, UEH',
            avatar: 'image/homepage1.png',
            rating: 5,
            views: 150,
            comments: 25,
        },
        {
            id: 2,
            title: 'Viết về cơ sở 2',
            description: 'Mô tả sự kiện 2.',
            image: Demo,
            time: '15/10/2024, 10:00 AM',
            location: 'Hội trường B, UEH',
            avatar: 'image/homepage1.png',
            rating: 4,
            views: 200,
            comments: 30,
        },
        {
            id: 3,
            title: 'Viết về cơ sở 3',
            description: 'Mô tả sự kiện 3.',
            image: Demo,
            time: '20/10/2024, 2:00 PM',
            location: 'Hội trường C, UEH',
            avatar: 'image/homepage1.png',
            rating: 3,
            views: 250,
            comments: 40,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [items.length]);

    const getVisibleItems = (): { item: EventItem; position: "prev" | "current" | "next" }[] => {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        const nextIndex = (currentIndex + 1) % items.length;

        return [
            { item: items[prevIndex], position: "prev" },
            { item: items[currentIndex], position: "current" },
            { item: items[nextIndex], position: "next" },
        ];
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="mt-16 flex w-600 flex-col items-center justify-center">
            <div className="mx-8 mb-8 w-full">
                <p className="t font-poppins mb-2 ml-14 text-2xl text-orange-500">Lịch hoạt động</p>
                <div className="mx-14 flex items-center justify-between">
                    <h1 className="font-poppins flex-1 text-left text-2xl text-black">Không bỏ lỡ bất kỳ hoạt động thú vị và bổ ích nào.</h1>
                    <p className="font-poppins flex-1 text-left text-lg font-medium leading-9 text-orange-500">
                        Theo dõi toàn bộ các hoạt động và sự kiện tích điểm rèn luyện tại đây. Ngoài ra còn có các chương trình và
                        hội thảo hữu ích đang chờ đón bạn.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center space-x-4 ">
                {visibleItems.map(({ item, position }) => (
                    <div
                        key={item.id}
                        className={`transition-transform duration-500 ease-in-out ${
                            position === "current" ? " scale-100 opacity-100" : "scale-75 opacity-50"
                        }`}
                        style={{ width: position === "current" ? "100%" : "75%" }}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="h-[300px] w-[1850px] rounded-[16px] object-cover"
                        />
                        <h3 className="mt-2 text-lg font-semibold text-center text-black">{item.title}</h3>
                    </div>
                ))}
            </div>

            <div className="m-8">
                <Link
                    href="/event"
                    className="inline-flex items-center justify-center rounded-[16px] bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    Xem tất cả
                    <svg
                        className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default EventsHomePage;