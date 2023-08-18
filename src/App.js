import React from 'react';
import Footer from './components/Footer';
import CheeseCake from './components/CheeseCake';
import Header from './components/Header';
import Ingredient from './components/Ingredient';
import Instructions from './components/Instructions';
import TimeCard from './components/TimeCard';
import ImageCard from './components/ImageCard';

const App = () => {
  return (
    <>
    <main className='overflow-hidden'>
   <Header/>
   <ImageCard/>
   <span className='block md:hidden'>
   <TimeCard/>
   </span>
   <Ingredient/>
   <CheeseCake/>
   <Instructions/>
   <Footer/>
   </main>
    </>
  )
}

export default App
