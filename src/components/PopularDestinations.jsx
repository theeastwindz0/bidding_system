import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const PopularDestinations = () => {

    const Box=()=>{
        return(
            <Link to=''>
            <div className='flex  justify-center items-center flex-col p-4   w-48 space-y-2' >
            <div className='bg-slate-200 rounded-full w-40 h-40'>
            </div>
            <p className='font-semibold'>Beauty</p>
            </div>
            </Link>
        )
    }
  return (
    <div className='flex justify-center items-center'>
    <div className='w-[80%]'>
    <Link to='/login' className=' text-2xl font-bold p-4 flex items-center space-x-2 '>
        <p>Popular Products</p>
    <FontAwesomeIcon icon={faArrowRight} size='lg' color='black'/>
        </Link>
    <div className=' space-x-2 flex flex-wrap justify-center'>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
    </div>
    </div>
    </div>
  )
}

export default PopularDestinations