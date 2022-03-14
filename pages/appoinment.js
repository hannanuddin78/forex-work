import React from 'react';
import Image from 'next/image'
import ResultCard from '../components/Appoinment/ResultCard';
import SearchCelander from '../components/Appoinment/SearchCelander'
import UpcomingReceive from '../components/Appoinment/UpcomingReceive';

const appoinment = () => {
    return (
        <div className='bg-[#fef0f1] p-8 min-h-screen'>
            <div className='bg-white rounded-3xl p-10 shadow-around mx-auto'>
                <h1 className="text-center text-4xl mt-3 mb-20">Appointment</h1>
                <SearchCelander />
                <UpcomingReceive />
                <ResultCard />
                <div className="flex justify-end mt-20 mr-5">
                    <span className="bg-[#E22424] rounded-full h-10 w-10 flex items-center justify-center">
                        <Image
                            src="/addIcon.svg"
                            alt="Picture of the author"
                            width={20}
                            height={20}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default appoinment