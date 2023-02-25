import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginDataProps } from "../pages/App/Login";

const logIn = async (user: LoginDataProps) => {
  console.log("user info", user);
  const { email, password } = user;
  if (email === "admin@test.com" && password === "admin123") {
    AsyncStorage.setItem("user", JSON.stringify(user));
    return {
      status: "success",
      message: "You are redirecting to home page",
      user: email,
    };
  }
};

const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: "success",
    message: "You are logged out",
  };
};

export default {
  logIn,
  logOut,
};
