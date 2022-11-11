import React, { useEffect } from 'react'
import { getProducts } from '../services/api-services';
import section_1 from '../Images/section_2.jpg';
import Button from './Button';
const ProductDetailed = () => {


  return (
    <div className='p-8 flex justify-center items-center flex-col space-y-8'>
        <div className='w-[60%] rounded-2xl mdrev:w-[100%] overflow-hidden'><img src={section_1}/>  </div>
        <div className='bg-gray-100 w-[60%] mdrev:w-[100%] flex justify-center items-center p-8 rounded-lg '>
            <div className='grid grid-cols-2 w-full'>
            <p className='text-black text-2xl p-2 font-semibold'># test</p>
            <p className='text-black text-2xl p-2 font-semibold'># test</p>
            <p className='text-black text-2xl p-2 font-semibold'># test</p>
            <p className='text-black text-2xl p-2 font-semibold'># test</p>
            <p className='text-black text-2xl p-2 font-semibold'># test</p>
            </div>
        </div>

        <div className='bg-gray-100 w-[60%] mdrev:w-[100%] flex justify-center items-center p-8 rounded-lg flex-col '>
            <p id='title' className='text-2xl my-4 '>Biddings</p>
            <div className='space-y-4 w-full'>

            <div className='bg-green-500 w-full text-white p-4 flex justify-between text-lg font-bold rounded-lg'>
                <p>1000</p>
                <p>UserName</p>
            </div>

            <Button
            className="text-white bg-red-600 w-full py-[16px] rounded-md font-bold"
            type="submit"
          >
            Lock Bid on 1200
          </Button>


            </div>
        </div>

    </div>
  )
}

export default ProductDetailed