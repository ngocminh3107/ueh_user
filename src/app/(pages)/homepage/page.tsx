import HomePage1 from '@/assets/homepage1.png'
import HomePage2 from '@/assets/homepage2.png'
import Image from 'next/image'
import EventsHomePage from "@/components/card-event-home";
import ReviewHomePage from '@/components/card-review-home';

const HomePage = () => {

    return (
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between bg-green-900">
            <div className="flex flex-col items-center justify-center ">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between ">
                    {/*p1*/}
                    <div className="relative">
                        <Image className="h-auto w-full" src={HomePage1} alt="Homepage" />
                        <div className="absolute inset-0 bg-black opacity-40" />
                        <div className="absolute left-20 top-1/2 -translate-y-1/2 transform">
                            <h1 className="font-poppins text-center text-[40px] font-bold leading-tight text-white md:text-left md:text-[60px] md:leading-[80px] lg:text-[80px] lg:leading-[100px] xl:text-[100px] xl:leading-[120px]">
                                CHÀO MỪNG ĐẾN VỚI MYUEH
                            </h1>
                        </div>
                    </div>
                    {/*p2*/}
                    <div className="mb-16 mt-8 flex w-screen flex-col items-center justify-center">
                        <div className="m-8 w-full">
                            <p className=" font-poppins mb-2 ml-14 text-2xl text-orange-600">Về chúng tôi</p>
                            <div className="mx-14">
                                <h1 className="font-poppins flex-1 text-left text-2xl">Chúng tôi làm việc để đưa UEH đến gần bạn hơn</h1>
                                <h1 className="font-poppins flex-1 text-left text-2xl">– Bạn hiểu UEH hơn, UEH hiểu bạn hơn.</h1>
                            </div>
                        </div>
                        <Image
                            className="h-auto w-[80%] rounded-3xl shadow-xl"
                            src={HomePage2}
                            alt="Homepage"
                            style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.7)' }}
                        />
                    </div>
                    {/*p3*/}
                    <ReviewHomePage/>
                    {/*p4*/}
                    <EventsHomePage/>

                </div>
            </div>
        </div>
    )
}

export default HomePage