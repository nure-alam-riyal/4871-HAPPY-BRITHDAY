import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ZNH from '../src/ZN/ZNH.jsx';
import App from '../src/App.jsx';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>
    }
])

export default Router;