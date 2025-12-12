import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
        const isLogged = sessionStorage.getItem('isLogged');
        const role = sessionStorage.getItem('role');
    return(
        isLogged === 'true' && role === 'admin'
            ? children
            : <Navigate to = '/admin'/>
    );
};


export default PrivateRoute;