import axios from "axios";

const API_URL = "http://ec2-34-212-141-95.us-west-2.compute.amazonaws.com:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
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
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
