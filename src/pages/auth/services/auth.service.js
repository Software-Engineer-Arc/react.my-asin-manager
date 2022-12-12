import axios from "axios";
import { properties } from '../../../properties.js';

const API_URL = `${properties.HOST}/api/auth/`;
const https = require('https');

const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});
class AuthService {
  
  login(username, password) {
    return instance
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        console.log('Data retrieved from login service ', JSON.stringify(response.data));
        let data = JSON.parse(JSON.stringify(response.data));
        console.log('Data  after parsing ', data);
        if (data.token) {
          console.log('Rtrieved access tolken from login service');
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        localStorage.setItem("arturo", "arturo");   
        console.log('Item in storage ', localStorage.getItem("user"));
        return response.data;
      });
  }

  logout() {
    console.log('In Logout actions');
    console.log(localStorage.getItem("user"));
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return instance.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
