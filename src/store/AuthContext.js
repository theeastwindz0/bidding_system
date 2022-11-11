import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";
const AuthContext=React.createContext({
    token:"",
    userid:"",
    isLoggedIn:true,
    login: (token) => {},
    logout: () => {},
})

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem("token");
    const user =JSON.parse(localStorage.getItem('user'));
  
    return { token: storedToken,user};
  };

export const AuthContextProvider=(props)=>
{

    const tokenData = retrieveStoredToken();
    let initialToken;
    let initialUserid;
    if (tokenData) {
      initialToken = tokenData.token;
      initialUserid=tokenData.user;

    }
    const [token, setToken] = useState(initialToken);
    const [userid, setUserId] = useState(initialUserid);
    const [isLoggedIn,setIsLoggedIn]=useState(!!initialToken);

    console.log(userid)



    const logoutHandler = () => {
        setToken(null);
        setIsLoggedIn(false);
        setUserId(null);
        localStorage.removeItem("token");
        localStorage.removeItem("userid");
        toast.success("Logged out Successfully")
      };

      const loginHandler = (token,user) => {
        setToken(token);
        setUserId(userid);
        setIsLoggedIn(true);
        localStorage.setItem("token", token);
        localStorage.setItem('user', JSON.stringify(user));

      };

      const tokenValue = {
        token: token,
        userid:userid,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      };

      return (
        <AuthContext.Provider value={tokenValue}>
          {props.children}
        </AuthContext.Provider>
      );
}

export default AuthContext