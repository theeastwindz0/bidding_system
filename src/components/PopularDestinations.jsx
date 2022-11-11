import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
const {getLastNProducts}=require('../services/api-services')
const PopularDestinations = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
    getLastNProducts(5).then((res)=>{
        setProducts(res.data.products)
    }).catch((err)=>{
        // console.log(err)
    })
    },[])
    const Box=({product})=>{
        return(
            <Link to=''>
            <div className='flex  justify-center items-center flex-col p-4   w-48 space-y-2' >
            <div className='bg-slate-200 rounded-full w-40 h-40'>
            <img src={product.image} alt="" className='w-full h-full rounded-full'/>
            </div>
            <p className='font-semibold'>{product.name}</p>
            </div>
            </Link>
        )
    }
  return (
    <div className='flex justify-center items-center md:p-8'>
    <div className='w-[80%]'>
    <Link to='/login' className=' text-2xl font-bold p-4 flex items-center space-x-2 '>
        <p>Popular Products</p>
    <FontAwesomeIcon icon={faArrowRight} size='lg' color='black'/>
        </Link>
    <div className=' space-x-2 flex flex-wrap justify-center'>
    {products.map((product)=>{
        return(
            <Box product={product}/>
        )
    })}

    </div>
    </div>
    </div>
  )
}

export default PopularDestinations