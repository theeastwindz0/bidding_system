import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ALL_VAR } from '../constants/constant'
import logo from '../Images/logo.png'
import AuthContext from '../store/AuthContext'
const Header = () => {
  const authCtx=useContext(AuthContext);
  return (
    <div className=' bg-primary text-white'>
      <div className='flex justify-between p-4 items-center'>
        <Link to='/' className='w-12'>
          <img src={logo} />
        </Link>
        <div id='title' className='text-2xl font-bold  uppercase '>{ALL_VAR.brandName}</div>
        <div>
            {authCtx.isLoggedIn ?
          <Link to='profile'>
          <FontAwesomeIcon icon={faUser} size='xl' color='white'/>
          </Link>
          :
          <Link to='/login'>
          <FontAwesomeIcon icon={faRightToBracket} size='xl' color='white'/>
          </Link>
            }
        </div>
      </div>

      <div className='flex justify-center space-x-2 smrev:space-x-1 bg-quaternery p-2 '>
        <Link to='/' className='hover:bg-opacity-90 hover:bg-purple-400 p-1'>HOME</Link>
        <Link to='/' className='hover:bg-opacity-90 hover:bg-purple-400 p-1'>CATEGORIES</Link>
        <Link to='/community' className='hover:bg-opacity-90 hover:bg-purple-400 p-1'>COMMUNITY</Link>
        <Link to='/about' className='hover:bg-opacity-90 hover:bg-purple-400 p-1'>ABOUT</Link>
        {/* <Link to='' className='hover:opacity-70 hover:bg-purple-400 p-1'>FEATURED</Link> */}
      </div>
    </div>
  )
}

export default Header