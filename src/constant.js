import { lazy } from "react";

const  HomePage =lazy(()=>import("./pages/HomePage"));
const  Signup =lazy(()=>import("./Authentication/Signup"));
const  Login =lazy(()=>import("./Authentication/Login"));
const  Product =lazy(()=>import("./Products/Product"));
const  ProductCategories =lazy(()=>import("./components/ProductCategories"));

export const ALL_LINKS={
    HomePage:{
        pageLink:'/',
        view:HomePage,
        headerShown:true,
        footerShown:true,
        loginRequire:false
    },
    Signup:{
        pageLink:'/signup',
        view:Signup,
        headerShown:true,
        footerShown:true,
        loginRequire:false
    },
    Login:{
        pageLink:'/login',
        view:Login,
        headerShown:true,
        footerShown:true,
        loginRequire:false
    },
    Product:{
        pageLink:'/product',
        view:Product,
        headerShown:true,
        footerShown:true,
        loginRequire:true
    },
    Categories:{
        pageLink:'/categories/:id',
        view:ProductCategories,
        headerShown:true,
        footerShown:true,
        loginRequire:false
    },

}

export const API_ACCOUNT_DOMAIN="http://localhost:5001/";

const BASE_MAIN_ADMIN=API_ACCOUNT_DOMAIN + 'api/user/';

export const MainAdmin_URL={

}