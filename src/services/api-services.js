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

export function getLastNProducts(numberOfProducts) {
  const url = API_ACCOUNT.lastNProducts;
  return http.get(url + '/' + numberOfProducts);
}

export function getCreateProduct(productData) {
  const url = API_ACCOUNT.createProduct;
  return http.post(url, productData);
}

export function getProducts() {
  const url = API_ACCOUNT.getAllProducts;
  return http.get(url);
}

export function getBidOnProduct(bidData) {
  const url = API_ACCOUNT.bidOnProduct;
  return http.post(url, bidData);
}

export function getSellProduct(sellData) {
  const url = API_ACCOUNT.sellProduct;
  return http.post(url, sellData);
}

export function getProductsBoughtByUser(userid) {
  const url = API_ACCOUNT.getAllProducts;
  return http.get(url + '/productBoughtByUser/' + userid);
}

export function uploadProfilePic(data) {
  const url = API_ACCOUNT.uploadProfilePic;
  return http.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
