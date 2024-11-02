import React from 'react';
import Image from 'next/image';

const Dashboard: React.FC = () => {



  return (
    <div>
        <div className='bg-white rounded-[8px]  flex row  justify-between items-center'>
            <div className='flex justify-between items-center px-5 py-5 w-full'>
                <h2>Dashboard</h2>
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


    </div>
  );
};

export default Dashboard;
