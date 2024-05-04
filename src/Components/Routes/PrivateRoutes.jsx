import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { person, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (person?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
