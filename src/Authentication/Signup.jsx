import { useFormik } from 'formik';
import React, { useContext, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { getCreateUser } from '../services/api-services';
import AuthContext from '../store/AuthContext';
const Signup = () => {

  const authCtx=useContext(AuthContext);

  useLayoutEffect(() => {
    if(authCtx.isLoggedIn)navigate('/')
  }, [])

  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      mobileNumber: '',
      city: '',
      state: '',
      pincode: '',
      address: '',
    },
    onSubmit: (values) => {
      if (values.password !== values.repeatPassword){
        toast.error('Passwords do not match');
        return;
      }
      getCreateUser(values)
        .then((res) => {
          if (res.status === 201) {
            toast.success('User created successfully');
            navigate('/login')
            
          }
        })
        .catch((err) => {
          toast.error('Something went wrong');
        });
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = 'Enter name';
      if (!values.password) errors.password = 'Enter Password';
      if (!values.repeatPassword) errors.password = 'Enter Password';
      if (!values.email) errors.email = 'Enter email';
      if (!values.mobileNumber) errors.mobileNumber = 'Enter Mobile no';
      if (!values.city) errors.city = 'Enter City';
      if (!values.state) errors.state = 'Enter State';
      if (!values.pincode) errors.pincode = 'Enter Pincode';
      if (!values.address) errors.address = 'Enter Address';

      return errors;
    },
  });

  return (
    <div className="flex justify-center items-center p-4 md:p-10">
      <div className=" md:w-[80%]  bg-slate-800 text-white px-12 py-16 rounded-lg">
        <p className=" text-3xl font-bold my-2"> Sign Up</p>
        <form onSubmit={formik.handleSubmit} className="space-y-4 my-2">
          <div className="grid grid-cols-3 gap-4 smrev:grid-cols-1">
            <InputField
              onBlur={formik.handleBlur}
              labelName="Name"
              type="text"
              uni="name"
              placeholder="Enter Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              touched={formik.touched.name}
              error={formik.errors.name}
            />
            <InputField
              onBlur={formik.handleBlur}
              labelName="Email"
              type="text"
              uni="email"
              placeholder="Email email"
              onChange={formik.handleChange}
              value={formik.values.email}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
            <InputField
              onBlur={formik.handleBlur}
              labelName="Mobile No"
              type="number"
              uni="mobileNumber"
              placeholder="Enter Mobile no"
              onChange={formik.handleChange}
              value={formik.values.mobileNumber}
              touched={formik.touched.mobileNumber}
              error={formik.errors.mobileNumber}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 smrev:grid-cols-1">
            <InputField
              onBlur={formik.handleBlur}
              labelName="City"
              type="text"
              uni="city"
              placeholder="Enter City"
              onChange={formik.handleChange}
              value={formik.values.city}
              touched={formik.touched.city}
              error={formik.errors.city}
            />
            <InputField
              onBlur={formik.handleBlur}
              labelName="State"
              type="text"
              uni="state"
              placeholder="Enter State"
              onChange={formik.handleChange}
              value={formik.values.state}
              touched={formik.touched.state}
              error={formik.errors.state}
            />
            <InputField
              onBlur={formik.handleBlur}
              labelName="Pincode"
              type="number"
              uni="pincode"
              placeholder="Enter Pincode"
              onChange={formik.handleChange}
              value={formik.values.pincode}
              touched={formik.touched.pincode}
              error={formik.errors.pincode}
            />
          </div>
          <InputField
            onBlur={formik.handleBlur}
            labelName="Address"
            type="text"
            uni="address"
            placeholder="Enter Address"
            onChange={formik.handleChange}
            value={formik.values.address}
            touched={formik.touched.address}
            error={formik.errors.address}
          />
          <div className="grid grid-cols-3 gap-4 smrev:grid-cols-1">
            <InputField
              onBlur={formik.handleBlur}
              labelName="Password"
              type="password"
              uni="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              error={formik.errors.password}
            />
            <InputField
              onBlur={formik.handleBlur}
              labelName="Repeat password"
              type="password"
              uni="repeatPassword"
              placeholder="Repeat repeatPassword"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              touched={formik.touched.repeatPassword}
              error={formik.errors.password}
            />
          </div>

          <div></div>
          <div className="flex justify-end items-center ">
            <Button
              className="text-white bg-blue-600 py-[12px] w-40 rounded-md"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </form>
        Already have an account ?{' '}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
