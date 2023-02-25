import { LOGIN_SUCCESS, LOGOUT } from "../actions/type";
import AsyncStorage from "@react-native-async-storage/async-storage";

const user = async () => {
  const storageUser = await AsyncStorage.getItem("user");
  if (storageUser) {
    return JSON.parse(storageUser);
  }
};

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
