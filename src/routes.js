import React from 'react';
// import { Navigate, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import LandingPage from './Components/LandingPage';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Shoes from './Components/AddToCartPage';
import AddToCartPage from './Components/AddToCartPage';
import { AdminHomePage } from './Components/Admin/AdminHomePage';


const routes= [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element:  <LandingPage />    },
      { path: 'products', element: <Services/> },
      { path: 'cart', element: <AddToCartPage /> },
      { path: 'about', element: <AboutUs/> },
      { path: "Shoes", element: <Shoes /> },
    ],
  },
  {
    path: '/admin',
    element: <MainLayout />,
    children: [
      { path: '', element:  <AdminHomePage/>    },
    ],
  },
];

export default routes;
