import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import InputField from '../components/InputField';
import { getBidOnProduct } from '../services/api-services';
import AuthContext from '../store/AuthContext';
import { toast } from 'react-toastify';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function BiddingOverlay({childFunc,product}) {
  const authCtx=React.useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      price: '',

    },
    onSubmit: (values) => {
      getBidOnProduct({bidAmount:values.price,productId:product._id,sellerId:product.seller._id,bidderId:authCtx.userid._id})
        .then((res) => {
          if (res.status === 200) {
            toast.success('Bid Place Successfully');
            setOpen(false)
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.price) errors.price = 'Enter bid amount';
  
      return errors;
    },
  });

  const [open, setOpen] = React.useState(false);
  console.log(product)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    childFunc.current = handleClickOpen;
  }, []);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Place Bid on {product.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>

        <InputField
              labelName="Previous Bid"
              type="number"
              value={product.highestBid}
              disabled={true}
              inputClass='border-2'
              labelClass='text-black'
            />
          <form onSubmit={formik.handleSubmit} className='space-y-4'>
        <InputField
              onBlur={formik.handleBlur}
              labelClass='text-black'
              labelName="Bid Amount"
              type="number"
              uni="price"
              placeholder="Enter bid price"
              onChange={formik.handleChange}
              value={formik.values.price}
              touched={formik.touched.price}
              error={formik.errors.price}
              inputClass='border-2'
              minValue
            />
          <Button
            className="text-white bg-blue-600 w-full py-[12px] rounded-md"
            type="submit"
          >
            Confirm Bid
          </Button>

            </form>

        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}