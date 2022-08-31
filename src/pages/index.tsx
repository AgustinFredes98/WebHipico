
import React from 'react';
import { Header } from '../Components/Header'
import 'tailwindcss/tailwind.css'
import image1 from '../Imgs/campo1.jpg'
import image2 from '../Imgs/campo2.jpg'
import image3 from '../Imgs/campo3.jpg'
import image4 from '../Imgs/campo4.jpg'
import image5 from '../Imgs/campo5.jpg'

const PresentationCard = () => {
  return(
    <div className=" hover:rotate-2 hover:scale-105 transition-all rounded text-xs sm:text-sm md:text-lg bg-slate-300 shadow-md flex justify-around flex-col">
      <h1 className='pb-3 border-b-2  border-b-red-500 font-bold text-center '>Hipico el Zairo</h1>
      <p className='text-center'>Horarios: 00 - 00</p>
      <p className='text-center'>Entrada: $000</p>
      <p className='text-center'>Carreras cuadreras</p>
      <p className='pb-3 text-center'>Gatera fija</p>
    </div>
  )
}

const index = () => {
  return (
    <>
      <Header/>
      <div className='h-max p-10 rounded text-slate-800 bg-orange-500 m-6 mx-auto grid grid-cols-3 gap-4'>
        <img className='hover:rotate-2 hover:scale-105 transition-all rounded shadow-md' src={image1.src} alt="" />
        <img className='hover:rotate-2 hover:scale-105 transition-all rounded shadow-md' src={image2.src} alt="" />
        <img className='hover:rotate-2 hover:scale-105 transition-all rounded shadow-md' src={image3.src} alt="" />
        <img className='hover:rotate-2 hover:scale-105 transition-all rounded shadow-md' src={image4.src} alt="" />
        <PresentationCard/>
        <img className='hover:rotate-2 hover:scale-105 transition-all rounded shadow-md' src={image5.src} alt="" />
      </div>
    </>
  )
}

export default index