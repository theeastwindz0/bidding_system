import React, { Suspense, useContext, useState } from "react";
import "./index.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ALL_LINKS } from "./constant";
import AuthContext from "./store/AuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
const App = () => {
  const authCtx = useContext(AuthContext);

  // const location=useLocation();
  const [headerShown, setHeaderShown] = useState(true);
  const [footerShown, setfooterShown] = useState(true);

  const PAGES = [
    ALL_LINKS.HomePage,
    ALL_LINKS.Login,
    ALL_LINKS.Signup,
  ];

  const currentPathName = (location) => {
    let currentPage = PAGES.filter(
      (item, index) => item.pageLink === location.pathname
    );
    if(currentPage.length===0)currentPage[0]={headerShown:true,footerShown:true};
    setHeaderShown(currentPage[0].headerShown);
    setfooterShown(currentPage[0].footerShown);
  };

  return (
    <BrowserRouter>
      {/* <YoutubeForm/> */}
      <div id="page-container">
        <div id="content-wrap">
            {headerShown && <Header />}
              <Suspense fallback={<div/>}>
            <Routes>
              {PAGES.map((item,i)=>{
        return(
          item.loginRequire ?
        <Route key={i}  path={item.pageLink} exact element={
          authCtx.isLoggedIn ?
        <item.view currentPathName={currentPathName}/> :  <Navigate to={ALL_LINKS.Login.pageLink} /> }/>
        :
        <Route key={i} path={item.pageLink} exact element={
          <item.view currentPathName={currentPathName}/>
        }/>
        )
      }
      )}
            </Routes>
            </Suspense>
        </div>
        <ToastContainer />
        {footerShown && <Footer />}
      </div>
    </BrowserRouter>
  );
};

export default App;
