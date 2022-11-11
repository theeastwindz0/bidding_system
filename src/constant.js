import { lazy } from 'react';
const HomePage = lazy(() => import('./pages/HomePage'));
const Signup = lazy(() => import('./Authentication/Signup'));
const Login = lazy(() => import('./Authentication/Login'));
const Product = lazy(() => import('./Products/Product'));
const ProductCategories = lazy(() => import('./components/ProductCategories'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AddProduct = lazy(() => import('./pages/AddProduct'));
const ProductDetailed = lazy(() => import('./components/ProductDetailed'));

export const ALL_LINKS = {
  HomePage: {
    pageLink: '/',
    view: HomePage,
    headerShown: true,
    footerShown: true,
    loginRequire: false,
  },
  Signup: {
    pageLink: '/signup',
    view: Signup,
    headerShown: true,
    footerShown: true,
    loginRequire: false,
  },
  Login: {
    pageLink: '/login',
    view: Login,
    headerShown: true,
    footerShown: true,
    loginRequire: false,
  },
  Product: {
    pageLink: '/product',
    view: Product,
    headerShown: true,
    footerShown: true,
    loginRequire: true,
  },
  Categories: {
    pageLink: '/categories',
    view: ProductCategories,
    headerShown: true,
    footerShown: true,
    loginRequire: false,
  },
  UserProfile: {
    pageLink: '/profile',
    view: UserProfile,
    headerShown: true,
    footerShown: true,
    loginRequire: true,
  },
  Dashboard: {
    pageLink: '/dashboard',
    view: Dashboard,
    headerShown: true,
    footerShown: true,
    loginRequire: true,
  },
  AddProduct: {
    pageLink: '/addproduct',
    view: AddProduct,
    headerShown: true,
    footerShown: true,
    loginRequire: true,
  },
  ProductDetailed: {
    pageLink: '/product_details/:id',
    view: ProductDetailed,
    headerShown: true,
    footerShown: true,
    loginRequire: true,
  },
};

export const API_ACCOUNT_DOMAIN = 'http://localhost:5001/';

const USER_API = API_ACCOUNT_DOMAIN + 'api/user/';
const PRODUCT_API = API_ACCOUNT_DOMAIN + 'api/product/';
export const API_ACCOUNT = {
  userSignUp: USER_API + 'signup',
  userLogin: USER_API + 'login',
  lastNProducts: PRODUCT_API + 'getLastNProducts',
  createProduct: PRODUCT_API + 'createProduct',
  bidOnProduct: PRODUCT_API + 'bidOnProduct',
  sellProduct: PRODUCT_API + 'sellProduct',
  getAllProducts: PRODUCT_API + 'getProducts',
  getProductsBySeller: PRODUCT_API + 'getProductBySeller',
  productBoughtByUser: PRODUCT_API + 'productBoughtByUser',
  uploadProfilePic : USER_API + 'profilePic',
};
