import {Navigate} from 'react-router-dom';


export const ProtectedRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (isAuthenticated != "true") {
        return <Navigate to="/login" replace={true} />
    }


    return children;
};