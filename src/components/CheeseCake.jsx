import React from 'react';
import { useState } from 'react';
import { Checkbox } from '@mui/material';

const CheeseCake = () => {
const [isCream, setIsCream] = useState();
const [isSugar, setIsSugar] = useState(false);

const [isSour, setIsSour] = useState(false);
const [isVanilla, setIsVanilla] = useState(false);
const [isLemon, setIsLemon] = useState(false);
const [isEgg, setIsEgg] = useState(false);
const [isSalted, setIsSalted] = useState(false);

const handleCream = () => {
  setIsCream(!isCream);
};

const handleSugar= () =>{
setIsSugar (!isSugar);
};

const handleSour =() =>{
  setIsSour (! isSour) ;  
  };

  const handleVanilla= ()=>{
    setIsVanilla ( ! isVanilla )
  };
  
  const handleLemon = () => {
    setIsLemon  (! isLemon );
  };

  const handleEgg = () => {
    setIsEgg   (! isEgg    );
  };

const handleSalted =() => {
  setIsSalted     (! isSalted      );
};


  return (
    <section>
      <div className='md:mt-0 md:ml-28 w-96'>
      <div className='mt-6 md:w-[530px] h-auto '>
        <i className='font-Playfair text-xl text-gray-600 ml-2'>Cheesecake</i>
        <ul>
          <li className="flex items-center mt-4"><Checkbox 
        checked={isCream}
        onChange={handleCream}
        /> <p>four 8-ounce blocks (904g) full-fat <span className="font-extrabold">cream cheese</span>, softened to room temperature</p></li>
          <li className="flex items-center"><Checkbox 
        checked={isSugar}
        onChange={handleSugar}
        /> <p>1 cup (200g) <span className="font-extrabold">granulated sugar</span></p></li>
          <li className="flex items-center"><Checkbox 
        checked={isSour}
        onChange={handleSour}
        /> <p>1 cup (240g) full-fat <span className="font-extrabold">sour cream</span>, at room temperature</p></li>
          <li className="flex items-center"><Checkbox 
        checked={isVanilla}
        onChange={handleVanilla}
        /> <p>1 teaspoon<span className="font-extrabold">pure vanilla extract</span> </p></li>
          <li className="flex items-center"><Checkbox 
        checked={isLemon}
        onChange={handleLemon}
        /> <p>2 teaspoons <span className="font-extrabold">fresh lemon juice</span> (optional, but recommended)</p></li>
          <li className="flex items-center"><Checkbox 
        checked={isEgg}
        onChange={handleEgg}
        /> <p>3 large <span className="font-extrabold">eggs</span>, at room temperature</p></li>
          <li className="flex items-center "><Checkbox 
        checked={isSalted}
        onChange={handleSalted}
        /> <p>topping suggestions: <span className="italic">salted caramel, lemon curd, strawberry topping,
           chocolate ganache, red wine chocolate ganache, fresh fruit,
           whipped cream, or raspberry sauce</span> (recipe in notes)</p></li>
        </ul>
      </div>
      </div>
    </section>

  )
}

export default CheeseCake
