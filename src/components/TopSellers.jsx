import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import books from '../Images/product_categories/books.jpeg'
import furniture from '../Images/product_categories/furniture.jpeg'
import fashion from '../Images/product_categories/fashion.jpeg'
import technology from '../Images/product_categories/technology.jpeg'
const {getLastNProducts}=require('../services/api-services')
const TopSellers = () => {
    const [products,setProducts]=useState([
        {image:books,name:'Electronic'},
        {image:fashion,name:'Fashion'},
        {image:fashion,name:'Fashion'},
        {image:fashion,name:'Fashion'},
        
    ])
    useEffect(()=>{
    },[])
    const Box=({product})=>{
        return(
            <Link className='flex space-x-32 smrev:space-x-2 text-white' to=''>
            <div className='flex  justify-center items-center flex-col p-4 smrev:px-0   space-y-2' >
            <div className='bg-slate-200 rounded-full w-52 h-52 smrev:w-40 smrev:h-40 flex '>
            <img src={product.image} alt="" className='w-full h-full rounded-full shadow-2xl shadow-quaternery'/>
            </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p id='title' className='text-2xl'>USERNAME</p>
                <p id='title'>CITY , STATE</p>
            </div>
            </Link>
        )
    }
  return (
    <div className='flex justify-center items-center md:p-8 bg-secondary'>
    <div className='w-full p-4'>
    <Link to='/login' className=' text-2xl font-bold p-4 flex items-center space-x-2 '>
        <p className='text-white'>Top Sellers</p>
    <FontAwesomeIcon icon={faArrowRight} size='lg' color='white'/>
        </Link>
    <div className= 'smrev:grid-cols-1 space-x-2 grid grid-cols-2'>
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

export default TopSellers