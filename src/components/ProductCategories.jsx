import React, { useState, useEffect, useContext, useRef } from 'react';
import { getProducts } from '../services/api-services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../store/AuthContext';
import BiddingOverlay from '../overlays/BiddingOverlay';
import { toast } from 'react-toastify';
const ProductCategories = () => {

  const biddingOverlayChildFunc=useRef();
  const authCtx=useContext(AuthContext);
  const userId = authCtx.userid?._id;
  console.log(userId);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        let data=res.data.products.filter((item)=>item.seller._id!==userId);
        console.log(data)
        setProducts(data);
        console.log(res.data);
      })

      .catch((err) => toast.error(err.response.data.message));
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

        <button
          className={`bg-tertiary bg-secondary text-white p-2 rounded-lg w-[90%] smrev:w-[100%] font-semibold`}
          onClick={()=>biddingOverlayChildFunc.current()}
        >
          Place Bid
        </button>
      </div>
    );
  };
  return (
    <div className="p-8 smrev:p-4 ">
      <div className="grid lg:grid-cols-3 gap-4  sm:grid-cols-2 smrev:grid-cols-1 smrev:space-y-4">
        {products.map((product) => (
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
      </div>
    </div>
  );
};

export default ProductCategories;
