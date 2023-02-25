import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";
import { useSelector } from "react-redux";

const Routes: React.FC = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return !!isLoggedIn ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
