import { useState } from "react";
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TimeCard from "./TimeCard";


const Ingredient = () => {
  const [isCheckedGraham, setIsCheckedGraham] = useState(false);
  const [isCheckedButter, setIsCheckedButter] = useState(false);
  const [isCheckedSugar, setIsCheckedSugar] = useState(false);
  

const handleChangeButter = (e) =>{
  setIsCheckedButter(e.target.checked)
}
  const handleChangeGraham = (e) => {
  setIsCheckedGraham(e.target.checked);

  }

  const handleChangeSugar = (e) => {
    setIsCheckedSugar(e.target.checked);
  }

  return (
    <section className="md:flex md:items-center md:gap-40">
      
    <div className="w-[550px] md:h-auto md:mb-50 md:ml-28">
      
      <h1 className="font-extrabold font-Playfair text-2xl ml-2 mb-2">Ingredients</h1>
      <h2 className="font-bold font-Playfair text-xl text-gray-600 ml-2 mb-2">Graham Cracker Crust</h2>
      <ul className="">
        <li className="flex items-center">
          <Checkbox 
          checked={isCheckedGraham}
          onChange={handleChangeGraham}
          /> <p>1 and 1/2 cups (150g) <span className="font-extrabold">graham cracker crumbs</span> (about 10 full sheet graham crackers)</p>
        </li>
        <li className="flex items-center">
          <Checkbox 
          checked={isCheckedButter}
          onChange={handleChangeButter}
          /> <p>5 Tablespoons (70g) <span className="font-extrabold">unsalted butter</span>, melted</p>
        </li>
        <li className="flex items-center">
          <Checkbox 
          checked={isCheckedSugar}
          onChange={handleChangeSugar}
          /> <p>1/4 cup (50g) <span className="font-extrabold">granulated sugar</span></p>
        </li>
      </ul>
    </div>
    <span className="hidden md:block">
    <TimeCard />
    </span>
    </section>
  );
}
export default Ingredient
