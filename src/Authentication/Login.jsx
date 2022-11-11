import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { getLoginUser } from '../services/api-services';
const Login = () => {
  const formik = useFormik({
    initialValues: {
      mobileNumber: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      getLoginUser(values)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validate: (values) => {
      let errors = {};
      if (!values.mobileNumber) errors.mobileNumber = 'Enter Phone Number';
      if (!values.password) errors.password = 'Enter Password';

      return errors;
    },
  });

  return (
    <div className="flex justify-center items-center p-4 md:p-10">
      <div className="w-[90%] md:w-[450px]  bg-slate-800 text-white px-12 py-16 rounded-lg">
        <p className=" text-3xl font-bold my-2"> Sign In</p>
        <form onSubmit={formik.handleSubmit} className="space-y-4 my-2">
          <InputField
            onBlur={formik.handleBlur}
            labelName="Phone Number"
            type="number"
            uni="mobileNumber"
            placeholder="Enter Phone Number"
            onChange={formik.handleChange}
            value={formik.values.mobileNumber}
            touched={formik.touched.mobileNumber}
            error={formik.errors.mobileNumber}
          />
          <InputField
            onBlur={formik.handleBlur}
            labelName="Password"
            type="text"
            uni="password"
            placeholder="Enter password"
            onChange={formik.handleChange}
            value={formik.values.password}
            touched={formik.touched.password}
            error={formik.errors.password}
          />

          <div></div>
          <Button
            className="text-white bg-blue-600 w-full py-[12px] rounded-md"
            type="submit"
          >
            Sign In
          </Button>
        </form>
        Don't have an account ?{' '}
        <Link to="/signup" className="text-blue-500">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
