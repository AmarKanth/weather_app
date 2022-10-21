import './App.css';

import RedirectToSearch from "./utils/RedirectToSearch";
import Search from './search/Search';
import Login from './auth/Login';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ProtectedRoute} from "./routes/ProtectedRoute";
import {PublicRoute} from "./routes/PublicRoute";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<PublicRoute><Login/></PublicRoute>} />
                    <Route path={'/'} element={<ProtectedRoute><RedirectToSearch/></ProtectedRoute>} />
                    <Route path={'/search'} element={<ProtectedRoute><Search/></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
