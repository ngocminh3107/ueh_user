"use client";

import { useState } from 'react';


export default function EventDetail({
    params, }: {params: { id: string }}) {







  const [isFormVisible, setIsFormVisible] = useState(false); // State để kiểm soát việc hiển thị form
  const [registeredCount, setRegisteredCount] = useState(5); // Số người đã đăng ký
  const maxCapacity = 10; // Số người tối đa có thể đăng ký

  const id = '1';
  const events = [
    {
      id: 1,
      title: 'Hội thảo Công nghệ 4.0',
      description: `Vào ngày 15 tháng 10 năm 2024, tại Hội trường A của Trường Đại học Kinh tế TP. Hồ Chí Minh, đã diễn ra Hội thảo Công nghệ 4.0 với chủ đề “Khám Phá Tương Lai”. Sự kiện thu hút hơn 300 sinh viên, giảng viên, và các chuyên gia trong ngành công nghệ thông tin, cùng nhau thảo luận về xu hướng công nghệ và tác động của nó đến xã hội hiện đại.

            Hội thảo bắt đầu lúc 8 giờ sáng với phần khai mạc của Tiến sĩ Nguyễn Văn A, Giám đốc Trung tâm Nghiên cứu Công nghệ. Trong bài phát biểu, ông nhấn mạnh tầm quan trọng của Công nghệ 4.0 trong việc thúc đẩy sự đổi mới sáng tạo và nâng cao hiệu suất làm việc. Sau đó, ba diễn giả khách mời đã chia sẻ những kiến thức và kinh nghiệm quý báu về các chủ đề như trí tuệ nhân tạo, Internet of Things (IoT), và blockchain.

            Một trong những điểm nhấn của hội thảo là phần thảo luận mở, nơi người tham dự có cơ hội đặt câu hỏi và giao lưu với các chuyên gia. Rất nhiều câu hỏi thú vị đã được đưa ra, từ cách thức triển khai công nghệ 4.0 trong doanh nghiệp đến những thách thức mà người lao động phải đối mặt trong thời đại số.

            Không chỉ dừng lại ở việc học hỏi, sự kiện còn mang đến những cơ hội kết nối giá trị. Các sinh viên có thể gặp gỡ và trò chuyện với các nhà tuyển dụng, tìm kiếm cơ hội thực tập và việc làm trong lĩnh vực công nghệ. Nhiều doanh nghiệp cũng đã thiết lập gian hàng để giới thiệu về sản phẩm và dịch vụ của mình.

            Hội thảo kết thúc vào lúc 5 giờ chiều, để lại ấn tượng sâu sắc trong lòng tất cả những người tham dự. Mọi người ra về với nhiều kiến thức bổ ích và một cái nhìn mới về công nghệ 4.0, hứa hẹn sẽ ứng dụng những gì đã học vào thực tiễn và góp phần xây dựng một tương lai sáng tạo hơn.`,
      image: 'https://via.placeholder.com/600',
      time: '15/10/2024, 8:00 AM',
      location: 'Hội trường A, UEH',
      registeredCount: 5,
      maxCapacity: 10,
    },
  ];

  const event = events.find((event) => event.id.toString() === id); // Tìm sự kiện dựa trên id

  if (!event) {
    return <div>Không tìm thấy sự kiện.</div>;
  }

  // Hàm để hiển thị form đăng ký
  const handleRegisterClick = () => {
    setIsFormVisible(true);
  };

  // Hàm để đóng form đăng ký
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  // Hàm xử lý khi người dùng gửi đăng ký
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registeredCount < maxCapacity) {
      setRegisteredCount(registeredCount + 1); // Tăng số lượng người đã đăng ký
      handleCloseForm(); // Đóng form đăng ký
      alert('Đăng ký thành công!'); // Thông báo thành công
    } else {
      alert('Sự kiện đã đủ người đăng ký!'); // Thông báo nếu sự kiện đã đầy
    }
  };

  return (
    <div className="mx-auto w-full h-screen  max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="relative">
        {/* Đặt số người đã đăng ký và nút đăng ký ở góc phải */}
        <div className="mb-4 flex items-center space-x-4">
          <p className="text-gray-700">
            Số người đã đăng ký: {registeredCount}/{maxCapacity}
          </p>
          <a
            className={`inline-block cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-700 ${
              registeredCount >= maxCapacity ? 'cursor-not-allowed opacity-50' : ''
            }`}
            onClick={registeredCount < maxCapacity ? handleRegisterClick : undefined} // Chỉ cho phép nhấp khi chưa đủ người
          >
            {registeredCount < maxCapacity ? 'Đăng Ký Tham Gia' : 'Đã Đầy'}
          </a>
        </div>
        <img src={event.image} alt={event.title} className="mb-4 w-full rounded-lg" />
        <h2 className="mb-2 text-3xl font-bold">{event.title}</h2>
        <p className="mb-2 text-gray-600">Thời gian: {event.time}</p>
        <p className="mb-2 text-gray-600">Địa điểm: {event.location}</p>
        <p className="mb-4 text-gray-800">{event.description}</p>

        {/* Popup đăng ký */}
        {isFormVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Đăng Ký Tham Gia</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Họ và tên:</label>
                  <input type="text" className="mt-1 w-full rounded border p-2" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email:</label>
                  <input type="email" className="mt-1 w-full rounded border p-2" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Số điện thoại:</label>
                  <input type="tel" className="mt-1 w-full rounded border p-2" required />
                </div>
                <button
                  type="submit"
                  className="rounded bg-green-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
                >
                  Gửi Đăng Ký
                </button>
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="ml-4 rounded bg-red-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-red-700"
                >
                  Đóng
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

