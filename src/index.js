import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Context';  
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import User from './User';
//import Home from './Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {path:'/',element :<App />},
  {path:'/add', element:<User />},
  {path:'/edit/:id', element:<User />}
]) 
root.render(

  <Context>
    <RouterProvider router={router} />
    
  </Context>

);

