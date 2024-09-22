import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
const SustainPage = () => {
  return (
    <>
        <div className='relative bg-[#FBBC89] pb-10 w-[100%]'>
            <div className='bg-[#1B3540] h-[32vh] lg:h-[56vh]'>
                <Navbar/>
                <h1 className='text-[#FBBC89] text-5xl lg:text-7xl absolute top-56 left-[31%] lg:left-[39%] '>Sustainabilty</h1>
            </div>
        </div>
    </>
  )
}

export default SustainPage
