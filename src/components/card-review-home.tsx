"use client";
import Image, { StaticImageData } from 'next/image';
import Demo from "@/assets/demo.png";

interface Review {
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

const ReviewHomePage: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      title: 'Viết về cơ sở 1',
      description:
        'Tôi rất ấn tượng với môi trường học tập và giảng dạy tại Trường Trung học XYZ. Trường có cơ sở vật chất hiện đại với các phòng học rộng rãi, thoáng mát và đầy đủ trang thiết bị. Phòng thí nghiệm khoa học và công nghệ luôn được cập nhật với các thiết bị mới, giúp học sinh có thể học thực hành và phát triển kỹ năng thực tế ngay từ sớm. Điểm đặc biệt của XYZ chính là đội ngũ giáo viên tâm huyết và tận tụy. Giáo viên ở đây luôn sẵn lòng hỗ trợ học sinh không chỉ trong học tập mà cả trong cuộc sống, góp phần tạo nên môi trường thân thiện và tích cực. Học sinh luôn được khuyến khích khám phá, phát triển khả năng bản thân, từ đó nâng cao sự tự tin và độc lập.',
      image: 'image/homepage1.png',
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
      image: 'image/homepage1.png',
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
      image: 'image/homepage1.png',
      time: '20/10/2024, 2:00 PM',
      location: 'Hội trường C, UEH',
      avatar: 'image/homepage1.png',
      rating: 3,
      views: 250,
      comments: 40,
    },
  ];

  return (
    <div
      className="flex w-screen flex-col items-center justify-center bg-[#F26F334D]"
    >
      <div className="m-8 w-full">
        <p className="font-poppins mb-2 ml-14 text-2xl text-[#005E69]">Review Cơ sở</p>
        <div className="mx-14 flex items-center justify-between">
          <h1 className="font-poppins flex-1 text-left text-2xl">
            Khám phá từng cơ sở của UEH qua các bài viết sống động.
          </h1>
          <p className="font-poppins flex-1 text-left text-lg font-medium leading-9">
            Những trải nghiệm chân thật từ sinh viên UEH, được chia sẻ qua từng dòng chữ và hình ảnh tại mỗi nơi họ đặt
            chân đến.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <span className="absolute left-2 top-2 z-10 rounded bg-blue-500 p-1 text-sm font-semibold text-white">
                Được yêu thích
              </span>
              <Image
                src={Demo} // Sử dụng `images.demo.src` để xác định đúng kiểu dữ liệu ảnh trong TypeScript
                alt={review.title}
                className="transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex w-full max-w-[300px] items-center justify-between text-gray-600">
              <article>
                <p className="mb-4 break-words text-gray-600">
                  {review.description.length > 200 ? `${review.description.substring(0, 200)}...` : review.description}
                </p>
                <a
                  href="#"
                  className="mb-4 block text-right text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Read more
                </a>

                <div className="flex items-center justify-items-start">
                  <div className="flex items-center">
                    <Image className="me-4 h-10 w-10 rounded-full" src={Demo} alt="" />
                    <div className="font-medium">
                      <p>
                        Jese Leos
                        <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-600 dark:text-gray-600">
                          {review.title}
                        </time>
                      </p>
                    </div>
                  </div>

                  <div className="ml-8 flex items-center justify-end">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`h-4 w-4 ${
                          index < review.rating ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">{review.rating}.0</h3>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>

      <div className="m-8">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          View All
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
        </a>
      </div>
    </div>
  );
};

export default ReviewHomePage;
