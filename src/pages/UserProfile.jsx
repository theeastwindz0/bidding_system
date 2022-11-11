import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import React, { useContext, useEffect, useState } from 'react';
import InputField from '../components/InputField';
import AuthContext from '../store/AuthContext';

const UserProfile = () => {
  const [preview, setPreview] = useState('https://cdn-icons-png.flaticon.com/512/3177/3177440.png');
  const [image, setImage] = useState();
  const [user, setUser] = useState({});

  const authCtx=useContext(AuthContext)
  
  useEffect(() => {
    if (!image) {
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
  }, [image, authCtx.isLoggedIn]);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <div className="grid grid-cols-8 smrev:grid-cols-1 md:p-8">
      <div className="col-span-3  flex justify-center items-center p-4 flex-col space-y-2">
        <div className="relative w-60 h-60 rounded-full bg-gray-300">
          <img
            src={user?.profilePic ? user?.profilePic : preview}
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
          {image &&         <Button
              className="text-white bg-secondary py-[12px] w-40 rounded-md"
              type="submit"
            >
              Update
            </Button>}
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
      </div>
    </div>
  );
};

export default UserProfile;
