const Home = () => {
    return (
        <div className="h-[2000px]">Home</div>

    )
}

export default Home

// import ReviewCard from "@/components/card-review";
// import Demo from "@/assets/demo.png";
// import Image from 'next/image'

// const ReviewPage = () => {
//   const events = [
//     {
//       id: 1,
//       title: 'Sự kiện 1',
//       description: 'Mô tả sự kiện 1.',
//       image: 'https://via.placeholder.com/300',
//       time: '10/10/2024, 9:00 AM',
//       location: 'Hội trường A, UEH',
//       views: 150,
//       comments: 25,
//     },
//     {
//       id: 2,
//       title: 'Sự kiện 2',
//       description: 'Mô tả sự kiện 2.',
//       image: 'https://via.placeholder.com/300',
//       time: '15/10/2024, 10:00 AM',
//       location: 'Hội trường B, UEH',
//       views: 200,
//       comments: 30,
//     },
//     {
//       id: 3,
//       title: 'Sự kiện 3',
//       description: 'Mô tả sự kiện 3.',
//       image: 'https://via.placeholder.com/300',
//       time: '20/10/2024, 2:00 PM',
//       location: 'Hội trường C, UEH',
//       views: 250,
//       comments: 40,
//     },
//   ];
//   return (
//     <div className="flex flex-col items-center justify-center ">
//       <div className="flex w-screen flex-col items-center justify-center bg-slate-600">
//         <div className="m-8 w-full">
//           <p className=" font-poppins mb-2 ml-14 text-2xl text-green-500">Review Cơ sở</p>
//           <h1 className=" font-poppins ml-14 text-2xl">
//             Chúng tôi làm việc để đưa UEH đến gần bạn hơn – Bạn hiểu UEH hơn, UEH hiểu bạn hơn.
//           </h1>
//         </div>
//         <div className="flex flex-col gap-8 md:flex-row">
//           {events.map((event) => (
//             <div key={event.id} className="flex flex-col rounded-[10px] bg-red-400 p-6 shadow-lg">
//               <div className="relative mb-4 overflow-hidden rounded-xl">
//                 <span className="absolute left-2 top-2 z-10 rounded bg-blue-500 p-1 text-sm font-semibold text-white">
//                   Được yêu thích
//                 </span>
//                 <Image
//                   src={Demo}
//                   alt={event.title}
//                   className="transform transition-transform duration-300 hover:scale-105" // Hiệu ứng hover
//                 />
//               </div>
//               <h2 className="mb-2 text-2xl font-bold text-gray-800">{event.title}</h2>
//               <p className="mb-2 text-gray-600">Thời gian: {event.time}</p>
//               <p className="mb-2 text-gray-600">Địa điểm: {event.location}</p>
//               <p className="mb-4 text-gray-600">{event.description}</p>
//               <div className="flex items-center justify-between text-gray-600">
//                 <span>{event.views} lượt xem</span>
//                 <span>{event.comments} bình luận</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="m-8">
//           <a
//             href="#"
//             className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
//           >
//             View All
//             <svg
//               className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//       <ReviewCard />
//     </div>


//   )
// }

// export default ReviewPage