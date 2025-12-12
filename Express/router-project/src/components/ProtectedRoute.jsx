import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {
        const isLogged = sessionStorage.getItem('isLogged');
    return(
        isLogged === 'true' ? children : <Navigate to = '/login'/>
    );
};


export default ProtectedRoute;