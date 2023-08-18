import React from 'react';
import Icon from '../Images/6dots.svg';

const Header = () => {
  return (
    <header className='md:mx-auto md:ml-28'>
        <h1 className='font-extrabold font-Playfair text-2xl pb-4 w-80 mt-6 ml-4 md:w-[587px]'>
        Classic Cheesecake Recipe
        </h1>
        <div className='flex mx-auto ml-4 mb-4 md:w-[592px] '>
          <img src={Icon} alt="icon" 
          className='mb-24 mr-2'/>
          <i>Look no further for a creamy and ultra smooth classic 
            cheesecake recipe! Paired with a buttery graham cracker crust,
             no one can deny its simple decadence. For the best results, bake in a water bath.</i>
        </div>
    </header>
  )
}

export default Header
