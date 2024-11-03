"use client";
import { useState } from "react";
import Demo from "@/assets/demo.png"; // Đảm bảo bạn đã import hình ảnh này

interface Event {
  id: number;
  title: string;
  description: string;
  image: string; // Giả định rằng đây là đường dẫn đến hình ảnh
  time: string;
  location: string;
  registeredCount: number;
  maxCapacity: number;
  date: Date;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: 'Hội thảo Công nghệ 4.0',
    description: 'Hội thảo về các xu hướng công nghệ mới trong thời đại 4.0, bao gồm trí tuệ nhân tạo, IoT và blockchain.',
    image: Demo,
    time: '15/10/2024, 8:00 AM',
    location: 'Hội trường A, UEH',
    registeredCount: 5,
    maxCapacity: 10,
    date: new Date(2024, 9, 15),
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
    date: new Date(2024, 9, 20),
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
    date: new Date(2024, 9, 25),
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
    date: new Date(2024, 9, 30),
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
    date: new Date(2024, 10, 5),
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
    date: new Date(2024, 10, 10),
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
    date: new Date(2024, 10, 15),
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
    date: new Date(2024, 10, 20),
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
    date: new Date(2024, 10, 25),
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
    date: new Date(2024, 10, 30),
  },
  // Thêm sự kiện trùng lặp
  {
    id: 11,
    title: 'Hội thảo Công nghệ Blockchain',
    description: 'Khám phá ứng dụng blockchain trong nhiều lĩnh vực.',
    image: Demo,
    time: '15/11/2024, 1:00 PM',
    location: 'Hội trường B, UEH',
    registeredCount: 5,
    maxCapacity: 10,
    date: new Date(2024, 10, 15),
  },
  {
    id: 12,
    title: 'Hội thảo Khởi nghiệp',
    description: 'Hỗ trợ các startup trong việc gọi vốn và phát triển ý tưởng.',
    image: Demo,
    time: '20/11/2024, 2:00 PM',
    location: 'Trung tâm Khởi nghiệp, TP. Hồ Chí Minh',
    registeredCount: 12,
    maxCapacity: 20,
    date: new Date(2024, 10, 20),
  },
];

const WeeklyCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeWeek = (direction: number) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + (direction * 7));
      return newDate;
    });
  };

  const renderDays = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

    const days = [];

    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(startOfWeek);
      currentDay.setDate(startOfWeek.getDate() + i);
      const hasEvent = eventsData.some(event => event.date.toDateString() === currentDay.toDateString());

      days.push(
        <div key={i} className={`flex flex-col items-center w-40 h-80 border border-gray-300 rounded-lg ${hasEvent ? 'bg-yellow-200 shadow-lg' : 'bg-white'} transition duration-300 ease-in-out relative`}>
          <span className={`text-4xl ${hasEvent ? 'text-blue-800' : 'text-gray-800'} font-bold`}>{currentDay.getDate()}</span>
          <span className="text-gray-600">{currentDay.toLocaleString('default', { weekday: 'short' })}</span>
          {hasEvent && (
            <div className="absolute right-1 top-1 text-red-500 text-xl">●</div>
          )}
          <div className="mt-2 text-sm text-left w-full">
            {eventsData.filter(event => event.date.toDateString() === currentDay.toDateString()).map((event, index) => (
              <div key={index} className="bg-white p-1 border-b border-gray-200">
                <strong className="text-blue-800">{event.title}</strong>: {event.description}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const renderTimeline = () => {
    return (
      <div className="mt-5 w-full border border-gray-300 rounded-lg p-2">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Timeline</h2>
        {eventsData.map(event => (
          <div key={event.id} className="flex justify-between p-2 border-b border-gray-200">
            <span className="text-gray-500">{event.time} - {event.title}</span>
            <span className="text-gray-500">({event.location})</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-5 border border-gray-300 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Lịch Tuần</h1>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => changeWeek(-1)}
          className="px-4 py-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-black transition duration-300"
        >
          Tuần trước
        </button>
        <button
          onClick={() => changeWeek(1)}
          className="px-4 py-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-black transition duration-300"
        >
          Tuần sau
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderDays()}
      </div>
      {renderTimeline()}
    </div>
  );
};

export default WeeklyCalendarPage;
