import axios from "axios";

// It's just a function which will check if the token is present and if it's present then it will send it in the header 
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    // when we have a token we gonna send it with request instead of picking and choosing which request to send it with
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
