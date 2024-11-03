"use client";
import WeeklyCalendarPage from '@/components/calendar';
import EventRegistered from '@/components/eventRegistered';
import ReviewInteracted from '@/components/reviewInteracted';
import { useState } from 'react';

const UserProfile: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>('tab1'); // Mặc định chọn tab 1

    // Hàm để lấy nội dung dựa trên tab được chọn
    const renderContent = (): JSX.Element => {
        switch (selectedTab) {
            case 'tab1':
                return <ReviewInteracted/>;
            case 'tab2':
                return <EventRegistered/>;
            case 'tab3':
                return <WeeklyCalendarPage/>;
            default:
                return <div>Không có nội dung</div>;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className="flex tabs space-x-3 w-full max-w-screen-lg p-4">
                {['tab1', 'tab2', 'tab3'].map((tab) => (
                    <div key={tab} className="">
                        <input
                            type="radio"
                            name="my_tabs_2"
                            id={tab}
                            className="hidden"
                            checked={selectedTab === tab}
                            onChange={() => setSelectedTab(tab)}
                        />
                        <label
                            htmlFor={tab}
                            className={`tab cursor-pointer p-4 text-black text-xl  transition-colors duration-300 rounded-2xl
                                ${selectedTab === tab ? 'bg-[#005E69] text-white border-[#005E69]' : 'bg-white border-transparent hover:border-indigo-500'}
                                rounded-2xl flex justify-center
                            `}
                        >
                            {tab === 'tab1' ? 'Đánh giá' : tab === 'tab2' ? 'Đã đăng ký' : 'Lịch'}
                        </label>
                    </div>
                ))}
            </div>

            <div className="">
                {renderContent()} {/* Gọi hàm để hiển thị nội dung tương ứng */}
            </div>
        </div>
    );
};

export default UserProfile;
