import React from 'react'

const ProductCategories = () => {

    const Box=()=>{
        return(
            <div className='p-4 smrev:p-0 flex justify-center items-center flex-col'>
            <div className='smrev:w-[100%] w-[90%] bg-gray-300 h-60 rounded-lg overflow-hidden' ></div>


            <div className='smrev:w-[100%] w-[90%] flex  justify-between p-2'>
              <div className='flex items-center  space-x-2'>
              <div className='w-20 h-20 bg-gray-100 rounded-full'>
              </div>
              <div>
                <p className='font-bold'>John Dales</p>
                <p className='text-xs'>Sponsored by </p>
                </div>
              </div>
              <div className='text-xl flex justify-center items-center'> 5999</div>
            </div>

        </div>
        )
    }
  return (
    <div className='p-8 smrev:p-4 '>  
    <div className='grid lg:grid-cols-3 gap-4  sm:grid-cols-2 smrev:grid-cols-1 smrev:space-y-4'>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
    </div>
    </div>
  )
}

export default ProductCategories