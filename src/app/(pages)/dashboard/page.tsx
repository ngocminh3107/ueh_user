
"use client"
import React from 'react';
import Image from 'next/image';


import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"



const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig
const Dashboard: React.FC = () => {



    return (
        <div>
            <div className='bg-white rounded-[8px]  flex row  justify-between items-center min-w-full'>
                <div className='flex justify-between items-center px-5 py-5 w-full'>
                    <h2 className='text-black'>Dashboard</h2>
                </div>
                <div>
                    <div>
                        <Image
                            src='/images/undraw_Web_search_re_efla.svg'
                            width={20}
                            height={20}
                            alt='search'
                        />
                    </div>
                </div>

            </div>
            <div className="grid gap-4 text-black mt-7">


                <div className="col-span-2  grid grid-cols-3  gap-4">
                    <div className="bg-white col-span-2 p-4 rounded-[8px]">


                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>


                    </div>
                    <div className="col-span-1 grid grid-row-3 gap-4">
                        <div className="bg-green p-4 rounded-[8px]">  <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-bold mb-4">Traffic Distribution</h2>
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-3xl font-bold">36,358</div>
                                <div className="text-sm text-green-500 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>

                                    +9% last year
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                                    <span>Organic</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                                    <span>Referral</span>
                                </div>
                            </div>
                            <div className="w-full h-24 bg-gray-100 rounded-lg mt-4">
                                <div className="w-3/4 h-full bg-blue-500 rounded-lg"></div>
                            </div>
                        </div></div>
                        <div className="bg-gray-100 p-4 rounded-[8px]">Column 2</div>
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-3 gap-4">
                    <div className="bg-gray-100 p-4 rounded-[8px]">Column 1</div>
                    <div className="bg-gray-100 p-4 rounded-[8px]">Column 2</div>
                    <div className="bg-gray-100 p-4 rounded-[8px]">Column 3</div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
