import ReviewCard from "@/components/card-review";
import Demo from "@/assets/demo.png";
import { StaticImageData } from 'next/image'

interface Review {
  id: number;
  title: string;
  description: string;
  images: (string | StaticImageData)[];
  time: string;
  location: string;
  views: number;
  comments: number;
  auth: string;
  rating: number;
}

const ReviewPage = () => {
  const Review: Review[] = [
    {
      id: 1,
      title: 'Sự kiện 1',
      description:
        'Một trong những điều tôi ấn tượng nhất là thư viện rộng lớn, nơi tích hợp nhiều tài liệu quý giá và không gian yên tĩnh để học tập. Giảng viên ở đây không chỉ có chuyên môn cao mà còn rất nhiệt tình, sẵn sàng.',
      images: [Demo, Demo, Demo, Demo],
      time: '2014-08-16 19:00',
      location: 'Hội trường A, UEH',
      views: 150,
      comments: 25,
      auth: 'Jese Leos',
      rating: 5,
    },
    {
      id: 2,
      title: 'Sự kiện 2',
      description: 'Mô tả sự kiện 2.',
      images: [Demo, Demo, Demo, Demo],
      time: '2014-08-16 19:00',
      location: 'Hội trường B, UEH',
      views: 200,
      comments: 30,
      auth: 'Jese Leos',
      rating: 4,
    },
    {
      id: 3,
      title: 'Sự kiện 3',
      description: 'Mô tả sự kiện 3.',
      images: [Demo, Demo, Demo, Demo],
      time: '2014-08-16 19:00',
      location: 'Hội trường C, UEH',
      views: 250,
      comments: 40,
      auth: 'Jese Leos',
      rating: 3,
    },
    {
      id: 4,
      title: 'Sự kiện 3',
      description: 'Mô tả sự kiện 3.',
      images: [Demo, Demo, Demo, Demo],
      time: '2014-08-16 19:00',
      location: 'Hội trường C, UEH',
      views: 250,
      comments: 40,
      auth: 'Jese Leos',
      rating: 3,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex w-screen flex-col items-center justify-center bg-slate-600">
        {/* <div className="m-8 w-full">
          <p className=" font-poppins mb-2 ml-14 text-2xl text-green-500">Review Cơ sở</p>
          <h1 className=" font-poppins ml-14 text-2xl">
            Chúng tôi làm việc để đưa UEH đến gần bạn hơn – Bạn hiểu UEH hơn, UEH hiểu bạn hơn.
          </h1>
        </div> */}
        <div className="">

          {/*  */}
          {Review.map((review) => (
            <ReviewCard
              key={review.id}
              title={review.title}
              location={review.location}
              auth={review.auth}
              rating={review.rating}
              description={review.description}
              views={review.views}
              comments={review.comments}
              images={review.images} // Truyền mảng các ảnh vào
              time={review.time} />
          ))}
        </div>

        <div className="mb-8">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            View All
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage