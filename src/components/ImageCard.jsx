import React from 'react';
import Cake from '../Images/photo1.png';
import { motion } from 'framer-motion';
import { GiKnifeFork } from 'react-icons/gi';
const ImageCard = () => {
  return (
   <section>
    <div>
    <div className='md:flex md:justify-center'>
        <motion.img src={Cake}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
         alt='Cake'
         className='mx-auto w-[352px] h-[202px] md:w-[969px] md:h-[444px]'
         />
        </div>
        <div className='flex items-center ml-3 mt-5 mb-5 md:hidden'>
        <GiKnifeFork size={17}
        color='orange' 
        className=''
        />
          <div className='flex flex-col space-y-0'>
            <h1 className='uppercase text-gray-400 leading-none'>Yields</h1>
            <p className='text-orange-400 leading-none'>12 servings</p>
          </div>
        </div>
    </div>
   </section>
  )
}

export default ImageCard
