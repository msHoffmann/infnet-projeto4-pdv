import { _post } from "../services/request";

const isUserLoggedIn = (navigate, route) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  if (!user) {
    navigate("/login");
  } else {
    if (route === "/login") {
      navigate("/");
    }
  }
};

const login = async (email, password) => {
  const response = await _post("login", {
    email,
    password,
  });
  return response;
};

const logout = () => {
  window.localStorage.clear();
};
export { isUserLoggedIn, login, logout };
