import axios from "axios";

const API_URL = "http://localhost:7656/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "Login", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password) {
    return axios.post(API_URL + "Register", {
      username,
      password,
    });
  }
}

export default new AuthService();