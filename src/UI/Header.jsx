import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { ALL_VAR } from '../constants/constant'
import logo from '../Images/logo.png'
const Header = () => {
  return (
    <div className=' bg-primary text-white'>
      <div className='flex justify-between p-4 items-center'>
        <Link to='/' className='w-12'>
          <img src={logo} />
        </Link>
        <div id='title' className='text-2xl font-bold  uppercase '>{ALL_VAR.brandName}</div>
        <div>
          <Link to='/login'>
          <FontAwesomeIcon icon={faRightToBracket} size='xl' color='white'/>
          </Link>
        </div>
      </div>

      <div className='flex justify-center space-x-2 bg-quaternery p-2'>
        <Link to='' className='hover:bg-purple-400 p-1'>HOME</Link>
        <Link to='' className='hover:bg-purple-400 p-1'>HOME</Link>
        <Link to='' className='hover:bg-purple-400 p-1'>HOME</Link>
        <Link to='' className='hover:bg-purple-400 p-1'>HOME</Link>
      </div>
    </div>
  )
}

export default Header