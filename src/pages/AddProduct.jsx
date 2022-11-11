import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import InputField from '../components/InputField';
import AuthContext from '../store/AuthContext';

const AddProduct = () => {

  const authCtx=useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      name: '',
      basePrice: '',
      description: '',
      category: '',
      biddingClosedAt: '',
      howOld: '',
      seller:authCtx.userid._id ,

    },
    onSubmit: (values) => {
      // getCreateUser(values)
      //   .then((res) => {
      //     if (res.status === 201) {
      //       toast.success('User created successfully');
      //       navigate('/login')
            
      //     }
      //   })
      //   .catch((err) => {
      //     toast.error('Something went wrong');
      //   });
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = 'Enter name';
      if (!values.basePrice) errors.basePrice = 'Enter Base Price';
      if (!values.description) errors.description = 'Enter description';
      if (!values.category) errors.category = 'Enter Category';
      if (!values.biddingClosedAt) errors.biddingClosedAt = 'Enter Bidding Final Price';
      if (!values.howOld) errors.howOld = 'Enter Age';

      return errors;
    },
  });

  return (
    <form className='p-8' onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-3 gap-4 smrev:grid-cols-1">
                  <InputField onBlur={formik.handleBlur} labelName="Name" type="text" uni="name" placeholder="Enter Name" onChange={formik.handleChange} value={formik.values.name} touched={formik.touched.name} error={formik.errors.name} inputClass='border-[1px]' labelClass='text-black' />
                  <InputField onBlur={formik.handleBlur} labelName="Category" type="text" uni="category" placeholder="Enter Category" onChange={formik.handleChange} value={formik.values.category} touched={formik.touched.category} error={formik.errors.description} inputClass='border-[1px]' labelClass='text-black' />
                  <InputField onBlur={formik.handleBlur} labelName="Price" type="number" uni="basePrice" placeholder="Enter Base Price" onChange={formik.handleChange} value={formik.values.basePrice} touched={formik.touched.basePrice} error={formik.errors.basePrice} inputClass='border-[1px]' labelClass='text-black' />
          </div>
          <div className="grid grid-cols-3 gap-4 smrev:grid-cols-1">
                  <InputField onBlur={formik.handleBlur} labelName="Product Age" type="text" uni="howOld" placeholder="" onChange={formik.handleChange} value={formik.values.howOld} touched={formik.touched.howOld} error={formik.errors.howOld} inputClass='border-[1px]' labelClass='text-black' />
                  <InputField onBlur={formik.handleBlur} labelName="End date" type="date" uni="biddingClosedAt" placeholder="" onChange={formik.handleChange} value={formik.values.biddingClosedAt} touched={formik.touched.biddingClosedAt} error={formik.errors.biddingClosedAt} inputClass='border-[1px]' labelClass='text-black' />

          </div>
                  <InputField onBlur={formik.handleBlur} labelName="Description" type="text" uni="description" placeholder="Enter Description" onChange={formik.handleChange} value={formik.values.description} touched={formik.touched.description} error={formik.errors.description} inputClass='border-[1px]' labelClass='text-black' />

                  <div className="flex justify-end items-center pt-2 ">
            <button
              className="text-white bg-blue-600 py-[12px] w-40 rounded-md"
              type="submit"
            >
              Add Product
            </button>
          </div>
    </form>
  )
}

export default AddProduct