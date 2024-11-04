"use client";
import ReviewCard from "@/components/card-review";
import Demo from "@/assets/demo.png";
import { StaticImageData } from 'next/image';
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
interface Review {
  id: string;
  title: string;
  description: string;
  images: string;
  time: string;
  location: string;
  views: number;
  comments: number;
  author: string;
  rating: number;
}

const ReviewPage = () => {
  // const reviews: Review[] = [
  //   {
  //     id: 1,
  //     title: 'Cơ sở 1',
  //     description:
  //       'Một trong những điều tôi ấn tượng nhất là thư viện rộng lớn, nơi tích hợp nhiều tài liệu quý giá và không gian yên tĩnh để học tập. Giảng viên ở đây không chỉ có chuyên môn cao mà còn rất nhiệt tình, sẵn sàng.',
  //     images: [Demo, Demo, Demo, Demo],
  //     time: '2014-08-16 19:00',
  //     location: 'Hội trường A, UEH',
  //     views: 150,
  //     comments: 25,
  //     auth: 'Jese Leos',
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     title: 'Cơ sở 2',
  //     description: 'Mô tả sự kiện 2.',
  //     images: [Demo, Demo, Demo, Demo],
  //     time: '2014-08-16 19:00',
  //     location: 'Hội trường B, UEH',
  //     views: 200,
  //     comments: 30,
  //     auth: 'Jese Leos',
  //     rating: 4,
  //   },
  //   {
  //     id: 3,
  //     title: 'Cơ sở 3',
  //     description: 'Mô tả sự kiện 3.',
  //     images: [Demo, Demo, Demo, Demo],
  //     time: '2014-08-16 19:00',
  //     location: 'Hội trường C, UEH',
  //     views: 250,
  //     comments: 40,
  //     auth: 'Jese Leos',
  //     rating: 3,
  //   },
  //   {
  //     id: 4,
  //     title: 'Cơ sở 4',
  //     description: 'Mô tả sự kiện 4.',
  //     images: [Demo, Demo, Demo, Demo],
  //     time: '2014-08-16 19:00',
  //     location: 'Hội trường D, UEH',
  //     views: 300,
  //     comments: 50,
  //     auth: 'Jese Leos',
  //     rating: 4,
  //   },
  //   {
  //     id: 5,
  //     title: 'Cơ sở 5',
  //     description: 'Mô tả sự kiện 5.',
  //     images: [Demo, Demo, Demo, Demo],
  //     time: '2014-08-16 19:00',
  //     location: 'Hội trường E, UEH',
  //     views: 350,
  //     comments: 60,
  //     auth: 'Jese Leos',
  //     rating: 5,
  //   },
  // ];
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '',
      title: '',
      description:
        '',
      images:"",
      time: '',
      location: '',
      views: 0,
      comments: 0,
      author:"",
      rating: 0,
    }
  ]);
  useEffect(() => {
    axios.get('/api/admin/postdata')
        .then((res) => {
            setReviews(res.data.data);
        })
        .catch((err) => {
            toast.error(err.response.data.error);
        });
}, []);





  const eventsPerPage = 3;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(reviews.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + eventsPerPage);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-screen flex-col items-center justify-center bg-slate-600">
        <div>
          {currentReviews.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              title={review.title}
              location={review.location}
              author={review.author}
              rating={review.rating}
              description={review.description}
              views={review.views}
              comments={review.comments}
              images={review.images} // Truyền mảng các ảnh vào
              time={review.time}
            />
          ))}
        </div>

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
}

export default ReviewPage;
