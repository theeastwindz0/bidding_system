import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import books from '../Images/product_categories/books.jpeg'
import furniture from '../Images/product_categories/furniture.jpeg'
import fashion from '../Images/product_categories/fashion.jpeg'
import technology from '../Images/product_categories/technology.jpeg'
const {getLastNProducts}=require('../services/api-services')
const PopularDestinations = () => {
    const [products,setProducts]=useState([
        {image:books,name:'Electronic'},
        {image:fashion,name:'Fashion'},
        {image:furniture,name:'Furniture'},
        {image:technology,name:'Books'},
        
    ])

    const navigate=useNavigate();
    useEffect(()=>{
    },[])
    const Box=({product})=>{
        return(
            <div className='cursor-pointer' onClick={()=>navigate('/categories')}>
            <div className='flex  justify-center items-center flex-col p-4   w-48 space-y-2' >
            <div className='bg-slate-200 rounded-full w-40 h-40'>
            <img src={product.image} alt="" className='w-full h-full rounded-full'/>
            </div>
            <p className='font-semibold'>{product.name}</p>
            </div>
            </div>
        )
    }
  return (
    <div className='flex justify-center items-center md:p-8'>
    <div className='w-[80%]'>
    <Link to='/login' className=' text-2xl font-bold p-4 flex items-center space-x-2 '>
        <p>Popular Categories</p>
    <FontAwesomeIcon icon={faArrowRight} size='lg' color='black'/>
        </Link>
    <div className=' space-x-2 flex flex-wrap justify-evenly'>
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