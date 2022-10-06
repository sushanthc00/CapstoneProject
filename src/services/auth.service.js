import axios from "axios";

const API_URL = "http://localhost:7656/api/auth/";

class AuthService {
  
  login(username, password) {
    debugger
    return axios
      .post(API_URL + "Login", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("username", JSON.stringify(response.data.username));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.clear();
  }

  register(username,email, password) {
    return axios.post(API_URL + "Register", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();