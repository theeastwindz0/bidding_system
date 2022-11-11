import React, { useState, useEffect, useContext, useRef } from 'react';
import { getProducts } from '../services/api-services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../store/AuthContext';
import BiddingOverlay from '../overlays/BiddingOverlay';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ProductCategories = () => {

  const biddingOverlayChildFunc=useRef();
  const authCtx=useContext(AuthContext);
  const [currentCategory,setCurrentCategory]=useState('');
  const userId = authCtx.userid?._id;
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        let data=res.data.products.filter((item)=>item.seller._id!==userId);
        setProducts(data);
        setCurrentProducts(data);
        console.log(res.data);
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(()=>setLoading(true))
  }, []);

  const Box = ({
    sellerName,
    price,
    sellerImage,
    productImage,
    city,
    state,
    sellerId,
    product
  }) => {
    return (
      <div className="p-4 smrev:p-0 flex justify-center items-center flex-col">
        <BiddingOverlay childFunc={biddingOverlayChildFunc} product={ product}  />
        <div className="smrev:w-[100%] w-[90%] bg-gray-300 h-60 rounded-lg overflow-hidden">
          <img src={productImage} alt="product" className="w-full h-full" />
        </div>

        <div className="smrev:w-[100%] w-[90%] flex  justify-between p-2">
          <div className="flex items-center  space-x-2">
            <div className="w-20 h-20 bg-gray-100 rounded-full">
              <img
                src={sellerImage}
                alt="seller"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="font-bold">{sellerName}</p>
              <p className="text-xs uppercase">
                <FontAwesomeIcon
                  className="text-lg text-tertiary"
                  icon={faLocationDot}
                  color="red"
                ></FontAwesomeIcon>
                {'  '}
                {city},{state}
              </p>
            </div>
          </div>
          <div className="text-xl flex justify-center items-center">
            ₹{price}
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-[80%] justify-center space-x-4 smrev:space-x-0 smrev:space-y-2 smrev:w-[100%] '>
        <button
          className={`bg-tertiary bg-primary text-white p-2 rounded-lg w-[100%] smrev:w-[100%] font-semibold`}
          onClick={()=>navigate(`/product_details/${product._id}`,product._id)}
        >
          View
        </button>

        <button
          className={`bg-tertiary bg-secondary text-white p-2 rounded-lg w-[100%] smrev:w-[100%] font-semibold`}
          onClick={()=>{loginChecker()}}
          >
          Place Bid
        </button>
          </div>
      </div>

    );
  };

  const loginChecker=()=>{
    if(!authCtx.isLoggedIn){navigate('/login');return;}
    biddingOverlayChildFunc.current();
  }

  const filterProducts=(filterItem)=>{
    let data=products.filter((item)=>item.category===filterItem);
    setCurrentProducts(data);
  }

  if(!loading)return 
  <div className='items-center'>Loading Products...</div>
  return (
    <>
      <div className='flex justify-center bg-black text-white space-x-4 p-1'>
        <div onClick={()=>{setCurrentCategory('books');filterProducts('books');}} className='hover:bg-secondary cursor-pointer px-2'>Books</div>
        <div onClick={()=>{setCurrentCategory('fashion');filterProducts('fashion');}} className='hover:bg-secondary cursor-pointer px-2'>Fashion</div>
        <div onClick={()=>{setCurrentCategory('furniture');filterProducts('furniture');}} className='hover:bg-secondary cursor-pointer px-2'>Furniture</div>
        <div onClick={()=>{setCurrentCategory('technology');filterProducts('technology');}} className='hover:bg-secondary cursor-pointer px-2'>Technology</div>
      </div>
    <div className="p-8 smrev:p-4 ">
      {currentProducts.length>0 ?
      <div className="grid lg:grid-cols-3 gap-4  sm:grid-cols-2 smrev:grid-cols-1 smrev:space-y-4">
        {currentProducts.map((product) => (
          <Box
            sellerName={product.seller.name}
            price={product.basePrice}
            sellerImage={product.seller.profilePic}
            productImage={product.image}
            city={product.seller.city}
            state={product.seller.state}
            sellerId = {product.seller._id}
            product={product}
          />
        ))}
      </div>: <p className='text-center font-bold'>No Products related to this category</p>}
    </div>
    </>
  );
};

export default ProductCategories;
