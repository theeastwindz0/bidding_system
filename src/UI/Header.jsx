import React from 'react'
import { Link } from 'react-router-dom'
import { ALL_VAR } from '../constants/constant'

const Header = () => {
  return (
    <div className=' bg-black text-white'>
      <div className='flex justify-between p-4'>
        <div></div>
        <div id='title' className='text-2xl font-bold  uppercase '>{ALL_VAR.brandName}</div>
        <div></div>
      </div>

      <div className='flex justify-center space-x-2 bg-gray-900 p-2'>
        <Link to='' className='hover:bg-purple-400 p-1'>HOME</Link>
        <Link to='' className='hover:bg-purple-400 p-1'>HOME</Link>
        <Link to='' className='hover:bg-purple-400 p-1'>HOME</Link>
        <Link to='' className='hover:bg-purple-400 p-1'>HOME</Link>
      </div>
    </div>
  )
}

export default Header