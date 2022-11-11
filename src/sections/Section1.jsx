import React from 'react'
import { Link } from 'react-router-dom'
import section_1 from '../Images/section_1.png'
const Section1 = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 bg-white items-center  '>
        <div className='p-4 md:p-20 flex justify-center bg-white  flex-col md:  grid-cols-1 mdrev:order-1'>
            <p id='title' className='text-6xl font-bold '>Trade What .</p>
            <p id='title' className='text-6xl font-bold'>You Want .</p>
            <p id='title' className='text-xl font-bold mt-4'>We got everything you need.</p>

            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vel deleniti. Hic repudiandae officiis consequuntur alias iste possimus explicabo? Dicta.</p>
            <div className='flex-1'>
            <button id='title' className='text-xl bg-black mt-10 text-white font-bold p-4 rounded-full transition  hover:scale-105 px-12' to=''> BECOME A MEMBER</button>
            </div>
        </div>
        <div className='grid-cols-1   flex justify-center items-center'>
          <div className='  flex justify-center items-center ' >
          <img src={section_1} className='' />
          </div>
        </div>
    </div>
  )
}

export default Section1