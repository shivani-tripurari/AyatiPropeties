import Image from 'next/image';
import React from 'react'
import logo from "../assets/logoAyati.png"

import './nav.css'

const Navbar = () => {
  return (
    <div>
      <nav className='static top-0 left-0 right-0 flex items-start justify-between'>    
        <Image src={logo} className='h-36 w-16 mx-7 md:h-52 md:w-24 md:mx-7 lg:h-64 lg:w-32 lg:mx-28'/>

        <ul className='hidden lg:flex lg:items-start lg:justify-evenly lg:mt-7 lg:mr-24'>

       

            <li className='p-7'>
                <h3 className='text-sm md:text-xs lg:text-xl'>HOME</h3>
            </li>
            <li className='p-7'>
                <h3 className='text-sm md:text-xs lg:text-xl'>ABOUT US</h3>
            </li>
            <li className='p-7'>
                <h3 className='text-sm md:text-xs lg:text-xl'>PROJECTS</h3>
            </li>
            <li className='p-7'>
                <h3 className='text-sm md:text-xs lg:text-xl'>SUSTAINABILITY</h3>
            </li>
            <li className='p-7'>
                <h3 className='text-sm md:text-xs lg:text-xl'>CONTACT US</h3>
            </li>
        </ul>
      </nav>
    </div>
  )
}


export default Navbar

