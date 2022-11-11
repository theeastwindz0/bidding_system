import React, { useEffect, useState } from 'react';
import { getProductsById, getSellProduct } from '../services/api-services';
import section_1 from '../Images/section_2.jpg';
import Button from './Button';
import { useParams } from 'react-router-dom';
import AuthContext from '../store/AuthContext';
import { useContext } from 'react';
const ProductDetailed = () => {
  const authCtx = useContext(AuthContext);
  const userId = authCtx.userid._id;
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductsById(id)
      .then((res) => {
        console.log(res.data.product);
        setProduct(res.data.product);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSell = () => {
    getSellProduct({
      productId: id,
      sellerId: product.seller._id,
      bidderId: userId,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-8 flex justify-center items-center flex-col space-y-8">
      <div className="w-[60%] rounded-2xl mdrev:w-[100%] overflow-hidden">
        <img src={
          product.image
        }
        alt="product"
         />{' '}
      </div>
      <div className="bg-gray-100 w-[60%] mdrev:w-[100%] flex justify-center items-center p-8 rounded-lg ">
        <div className="grid grid-cols-2 w-full">
          <p className="text-black text-2xl p-2 font-semibold">
            Name : {product.name}
          </p>
          <p className="text-black text-2xl p-2 font-semibold">
            Base Price : {product.basePrice}
          </p>
          <p className="text-black text-2xl p-2 font-semibold">
            Description : {product.description}
          </p>
          <p className="text-black text-2xl p-2 font-semibold">
            Category : {product.category}
          </p>
          <p className="text-black text-2xl p-2 font-semibold">
            How old? : {product.howOld}
          </p>
          <p className="text-black text-2xl p-2 font-semibold">
            Highest Bid : {product.highestBid}
          </p>
          <p className="text-black text-2xl p-2 font-semibold">
            Bidding Ends At :{' '}
            {
              //date to string
              new Date(product.biddingClosedAt).toString().slice(0, 15)
            }
          </p>
          {product.isSold ? (
            <p className="text-black text-2xl p-2 font-semibold">Sold</p>
          ) : (
            <p className="text-black text-2xl p-2 font-semibold">Not Sold</p>
          )}
        </div>
      </div>

      <div className="bg-gray-100 w-[60%] mdrev:w-[100%] flex justify-center items-center p-8 rounded-lg flex-col ">
        <p id="title" className="text-2xl my-4 ">
          Biddings
        </p>
        <div className="space-y-4 w-full">
          {/* <div className="bg-green-500 w-full text-white p-4 flex justify-between text-lg font-bold rounded-lg">
            <p>1000</p>
            <p>UserName</p>
          </div> */}
          {product?.peopleWhoBided?.map((bid) => (
            <div className="bg-green-500 w-full text-white p-4 flex justify-between text-lg font-bold rounded-lg">
              <p>{bid.bidAmount}</p>
              <p>{bid.user.name}</p>
            </div>
          ))}

          {product.seller === authCtx.userid._id
&&          <Button
            className="text-white bg-red-600 w-full py-[16px] rounded-md font-bold"
            type="submit"
            onClick={product.isSold ? null : handleSell}
          >

           {
              product.isSold ? "Already Sold" : "Sell To Highest Bidder"
           }

          </Button>
}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailed;
