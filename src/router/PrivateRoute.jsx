import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();
  console.log(location);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return user?.email ? (
    children
  ) : (
    <Navigate state={location.pathname} to={"/login"}></Navigate>
  );
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
