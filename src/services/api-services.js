import { API_ACCOUNT } from '../constant';
import http from './httpservice';

let token = '';
let userid = '';

const retrieveStoredToken = () => {
  userid = localStorage.getItem('userid');
  token = localStorage.getItem('token');
};

export function getCreateUser(signupData) {
  const url = API_ACCOUNT.userSignUp;
  return http.post(url, signupData);
}

export function getLoginUser(loginData) {
  const url = API_ACCOUNT.userLogin;
  return http.post(url, loginData);
}
