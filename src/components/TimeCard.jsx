import React from 'react';
import Clock from '../icons/icons8-clock-50.png';
import { GiKnifeFork } from 'react-icons/gi';

const TimeCard = () => {
  return (
    <section>
      <div className='md:container md:mx-auto md:justify-end md:flex md:ml-10 md:mt-8'>
        <div className='md:w-[216px] md:h-[367px] md:bg-white md:rounded-lg md:shadow-md md:flex md:flex-col md:gap-4'>
        <div className='flex items-center hidden md:flex md:items-center md:justify-center mt-10'> {/*for mobile */}
        <GiKnifeFork size={17}
        color='orange' 
        className=''
        />
          <div className='flex flex-col space-y-0'>
            <h1 className='uppercase text-gray-400 leading-none'>Yields</h1>
            <p className='text-orange-400 leading-none'>12 servings</p>
          </div>
        </div>
        <div className='flex items-center my-5 md:flex-col md:gap-12'>
          <div className='flex items-center'>
            <img src={Clock} alt='Clock'
            className='w-5 h-auto mx-2'/>
            <div>
              <h1 className='leading-none uppercase text-gray-400 md:mb-1 md:text-xs md:font-bold'>
              Prep TIme
              </h1>
              <p className='leading-none'>45 minutes</p>
            </div>
          </div>
          <div className='flex items-center ml-2'>
            <img src={Clock} alt='Clock'
            className='w-5 h-auto mx-2'/>
            <div>
              <h1 className='leading-none uppercase text-gray-400 md:mb-1 md:text-xs md:font-bold'>
              Cook Time
              </h1>
              <p className='leading-none'>1 hour</p>
            </div>
          </div>
          <div className='flex items-center ml-2'>
            <img src={Clock} alt='Clock'
            className='w-5 h-auto mx-2'
           />
            <div>
              <h1 className='leading-none uppercase text-gray-400 md:mb-1 md:text-xs md:font-bold'>
              Total Time
              </h1>
              <p className='leading-none'>7,75 hours</p>
            </div>
          </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default TimeCard
