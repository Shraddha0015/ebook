
import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Nav';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
//import Contact from './component/Contact';
import Portfolio from './component/Portfolio';
import App from './App';
import ProductDetail from './ProductDetail';
import ThemeProvider from './Context/ThemeContext.js';
const Contact = React.lazy(() => import('./component/Contact.js'));


const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,

        children: [

            {
                index: 'Home',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />


            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element:
                    <React.Suspense>

                        <Contact />
                    </React.Suspense>
            },

            {
                path: '/portfolio',
                element: <Portfolio />
            },

            {
                path: '/product',
                element: <App />
            },
            {
                path: 'readmore/:id',
                element: <ProductDetail />
            },



        ]
    }


])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>

        <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
