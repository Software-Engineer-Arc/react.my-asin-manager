import axios from "axios";
import authHeader from "./auth-header";
import { properties } from '../properties.js';

const API_URL = `${properties.HOST}/api/test/`;

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getGreetings() {
    return axios.get(API_URL + "greeting", { headers: authHeader() });
  }
  
}

export default new UserService();
