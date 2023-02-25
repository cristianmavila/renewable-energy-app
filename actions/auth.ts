import { LOGIN_SUCCESS, LOGOUT } from "./type";
import AuthService from "../services/authService";
import { LoginDataProps } from "../pages/App/Login";
import { Dispatch } from "redux";

export const login =
  (user: LoginDataProps) =>
  <Promise>(dispatch: Dispatch<any>) => {
    return AuthService.logIn(user).then(
      (response) => {
        if (response.status === "success") {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: response.user },
          });
          Promise.resolve();
          return response;
        }
      },
      (error) => {
        const message = error.toString();
        Promise.reject();
        return message;
      }
    );
  };

export const logout = () => (dispatch: Dispatch<any>) => {
  return AuthService.logOut().then((response) => {
    if (response.status === "success") {
      dispatch({
        type: LOGOUT,
      });
      Promise.resolve();
      return response;
    }
  });
};
