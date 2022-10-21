import {Navigate} from 'react-router-dom';


export const ProtectedRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    return children;
};