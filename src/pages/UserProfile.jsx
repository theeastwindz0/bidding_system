import React, { useEffect, useState } from 'react';
import InputField from '../components/InputField';

const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <div className="grid grid-cols-8 smrev:grid-cols-1 md:p-8">
      <div className="col-span-3  flex justify-center items-centerp-8 p-4">
        <div className="w-60 h-60 rounded-full bg-gray-300">
          <img
            src={user?.profilePic ? user?.profilePic : 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}
            alt="profile"
            className="w-full h-full rounded-full"
          />
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
