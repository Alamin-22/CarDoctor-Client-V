import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const Location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={Location.pathname} to={"/login"} replace></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;




