import React from 'react'
import { Header } from '../Components/Header'
import 'tailwindcss/tailwind.css'


const Map = () => {
  return (
    <>
      <Header/>
      <div>
        <iframe
          className="w-screen h-[calc(100vh-3.23rem)]"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-26.686767863803343,-60.728001594543464+(Avia%20terai)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </div>
    </>
  )
}

export default Map

