import React from 'react'
import GetInTouch from './GetInTouch'
const Footer = () => {
  return (
    <>
      <div className='h-[90vh] bg-[#FBBC89]'>
        <GetInTouch/>
        <div className='ml-12 lg:ml-20 mt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between'>
          <div className='flex flex-col lg:flex-row items-start justify-evenly'>
            {/* text */}
            <div className='mr-20 text-xl'>
              <ul>
                <li>Terms and Conditions</li>
                <li>User's guide</li>
                <li>Support Center</li>
                <li>Press info</li>
              </ul>
            </div>
            <div className='text-xl'>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Projects</li>
                <li>Sustainablity</li>
                <li>Contact us</li>
             </ul>
            </div>
          </div>
          <div className='flex flex-row justify-center items-end mr-32'>
            {/* socials */}
            <h1>Instagram</h1>
            <h1>Facebook</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
