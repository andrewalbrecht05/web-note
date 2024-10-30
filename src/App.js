import './App.css';

import React from 'react';

import CreateFolder from './views/CreateFolder/CreateFolder';
import CreateNote from './views/CreateNote/CreateNote';
import Login from './views/Login/Login';
import Main from './views/Main/Main';
import NotFound from './views/NotFound/NotFound';
import Register from './views/Register/Register';

const App = () => {
    return (
        <>
            <Main/>
            <CreateNote />
            <CreateFolder/>
            <Login/>
            <Register/>
            <NotFound/>
        </>


    );
};

export default App;