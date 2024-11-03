import './App.css';

import React from 'react';
import {Route, Routes} from "react-router-dom";

import ProtectedRoutes from "./components/ProtectedRoutes";
import CreateFolder from './views/CreateFolder/CreateFolder';
import CreateNote from './views/CreateNote/CreateNote';
import Login from './views/Login/Login';
import Main from './views/Main/Main';
import NotFound from './views/NotFound/NotFound';
import Register from './views/Register/Register';

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<ProtectedRoutes/>}>
                    <Route path='/' element={<Main/>} />
                    <Route path='/create-note' element={<CreateNote/>} />
                    <Route path='/create-folder' element={<CreateFolder/>} />
                </Route>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>


    );
};

export default App;