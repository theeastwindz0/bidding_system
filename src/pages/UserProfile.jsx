import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import React, { useContext, useEffect, useState } from 'react';
import InputField from '../components/InputField';
import AuthContext from '../store/AuthContext';
import { getUploadProfilePic,getProductsStats } from '../services/api-services';
import { toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const UserProfile = (props) => {
  const authCtx=useContext(AuthContext)
  const userId=authCtx.userid?._id
  const [preview, setPreview] = useState(!!authCtx.userid ? authCtx.userid.profilePic : 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png');
  const [image, setImage] = useState(null);
  const [user, setUser] = useState({});
  const navigate=useNavigate();
  const [productStats, setProductStats] = useState({});

  useEffect(() => {
    if (!image) {
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

  }, [image]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  useEffect(() => {
    getProductsStats(userId)
      .then((res) => {
        console.log(res.data);
        setProductStats(res.data);

      })
      .catch((err) => console.log(err));
  }, []);


  const updatePicHandler=()=>{
    getUploadProfilePic({image,userId:authCtx.userid._id})
    .then((res)=>{toast.success("Profile Picture Updated !");setImage(null);})
    
    .catch((err)=>console.log(err))
  }

  return (
    <div className="grid grid-cols-8 smrev:grid-cols-1 md:p-8">
      <div className="col-span-3  flex justify-start items-center p-4 flex-col space-y-2">
        <div className="relative w-60 h-60 rounded-full bg-gray-300">
          <img
            src={ preview ? preview : user?.profilePic  }
            alt="profile"
            className="w-full h-full rounded-full"
          />

              <div className="absolute right-0 bottom-8">
              <label htmlFor="profile_pic">
                <FontAwesomeIcon
                  className="text-2xl text-tertiary"
                  icon={faEdit}
                ></FontAwesomeIcon>
              </label>
              <input
                id="profile_pic"
                hidden
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/png, image/jpeg"
              ></input>
            </div>
        </div>

        <div>
          {image &&
          <Button
              onClick={()=>updatePicHandler()}
              className="text-white bg-secondary py-[12px] w-40 rounded-md"
              type="submit"
            >
              Update
            </Button>}
        </div>
        <div className='w-full flex flex-col space-y-8 items-center'>
        <Button onClick={()=>navigate('/addproduct')} className="text-black hover:bg-green-500 border-[1px] hover:text-white hover:border-none  hover:bg-blue-  border-black w-[60%] py-[12px] w- rounded-md" type="submit">Add Product</Button>
        <Button onClick={()=>navigate('/viewmyproducts')}  className="text-black hover:bg-blue-500 border-[1px] hover:text-white hover:border-none  hover:bg-blue-  border-black w-[60%] py-[12px] w- rounded-md" type="submit">View Products</Button>
        {/* <Button onClick={()=>} className="text-black bg-transparent border-[1px] hover:text-white hover:border-none  hover:bg-green-500  border-black w-[60%] py-[12px] w- rounded-md" type="submit">View My Products</Button> */}
        <Button onClick={()=>authCtx.logout()} className="text-black bg-transparent border-[1px] hover:text-white hover:border-none  hover:bg-red-500  border-black w-[60%] py-[12px] w- rounded-md" type="submit">Logout</Button>
        </div>
      </div>
      <div className="col-span-5 p-4 space-y-4">
        <div className="grid grid-cols-3 gap-4 smrev:grid-cols-1">
          <InputField
            disabled={true}
            labelName="Name"
            labelClass="text-black"
            type="text"
            uni="text"
            value={user?.name}
            inputClass="bg-gray-200"
          />
          <InputField
            disabled={true}
            labelName="Email"
            labelClass="text-black"
            type="text"
            uni="text"
            value={user?.email}
            inputClass="bg-gray-200"
          />
          <InputField
            disabled={true}
            labelName="Mobile no"
            labelClass="text-black"
            type="text"
            uni="text"
            value={user?.mobileNumber}
            inputClass="bg-gray-200"
          />
        </div>
        <InputField
          disabled={true}
          labelName="Address"
          labelClass="text-black"
          type="text"
          uni="text"
          value={user?.address}
          inputClass="bg-gray-200"
        />
        <div className="grid grid-cols-3 gap-4 smrev:grid-cols-1">
          <InputField
            disabled={true}
            labelName="City"
            labelClass="text-black"
            type="text"
            uni="text"
            value={user?.city}
            inputClass="bg-gray-200"
          />
          <InputField
            disabled={true}
            labelName="State"
            labelClass="text-black"
            type="text"
            uni="text"
            value={user?.state}
            inputClass="bg-gray-200"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mdrev:grid-cols-1 py-4">
          <div className='h-40 bg-red-500 rounded-lg flex justify-center items-center flex-col'>
            <p id='title' className='text-xl text-white'>Products Sold</p>
            <p id='title' className='text-2xl text-white'>{
              productStats?.countProductsSold
            }</p>
          </div>

          <div className='h-40 bg-pink-500 rounded-lg flex justify-center items-center flex-col'>
            <p id='title' className='text-xl text-white'>Products Bought</p>
            <p id='title' className='text-2xl text-white'>{
              productStats?.countProductsBought
            }</p>

          </div>

          {/* <div className='h-40 bg-green-500 rounded-lg flex justify-center items-center flex-col'>
            <p id='title' className='text-lg text-white'>Products Listed</p>
            <p id='title' className='text-xl text-white'>0</p>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default UserProfile;
