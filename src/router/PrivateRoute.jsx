import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return user?.email ? children : <Navigate to={"/login"}></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
