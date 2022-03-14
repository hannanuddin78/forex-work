import Image from 'next/image'
import React from 'react'

const SearchCelander = () => {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='relative mb-10 md:mb-0'>
        <input type="text" placeholder="Search Users....." className="w-full rounded-lg border-solid border-neutral-300 p-2 h-[36px]" />
        <span className="search-icon absolute right-2 top-5">
          <Image
            src="/search.svg"
            alt="Picture of the author"
            width={20}
            height={20}
          />
        </span>
      </div>
      <div>
        <div className="filter-by flex items-center justify-end">
          <p>Filter By</p>
          <div className="date-picker relative ml-6 flex sm:w-[50%] h-[50px]  border-2 ">
            <input type="text" placeholder="14th July 2022" className="border-2 border-solid rounded-lg border-[#e22424] focus:outline-orange-600 text-center w-full h-full" />
            <div className="absolute datepicker-icon w-[60px] bg-[#e22424] h-[56px] flex items-center justify-center rounded-lg">
              <span className="h-6 w-6 ">
                <Image
                  src="/calendar-line.svg"
                  alt=""
                  width={33}
                  height={31}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchCelander