import React from 'react'

const Footer = () => {
  const currentYear=new Date().getFullYear();
  return (
    <div id='footer' className='bg-black text-white text-xl p-4 flex justify-center items-center'>

      <p className='text-center font-semibold'>  Copyright &copy; {currentYear} All the rights reserved.</p>
    </div>
  )
}

export default Footer