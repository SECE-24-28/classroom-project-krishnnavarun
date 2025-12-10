import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {
        const isLogged = localStorage.getItem('isLogged');
    return(
        isLogged === 'true' ? children : <Navigate to = '/login'/>
    );
};


export default ProtectedRoute;