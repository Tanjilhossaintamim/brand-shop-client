import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return !user?.email ? children : <Navigate to={"/"}></Navigate>;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export default PublicRoute;
