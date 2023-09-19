import React, { Children } from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../Home/Home';
import MainLayout from '../MainLayout/MainLayout';
import AllToys from '../AddToys/AddToys';
import MyToys from '../MyToys/MyToys'
import AddToys from '../AddToys/AddToys';
import Blog from '../Blog/Blog';
import NotFound from '../NotFound/NotFound';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout> </MainLayout>,
        children: [
            {
                path: "/",
                element: <Home> </Home>,

            },

            {
                path: "/alltoys",
                element: <AllToys></AllToys>,

            },

            {
                path: "/mytoys",
                element: <MyToys> </MyToys>,

            },


            {
                path: "/addnewtoy",
                element: <AddToys> </AddToys>,


            },

            {
                path: "/blog",
                element: <Blog> </Blog>


            },

            {
                path: "/signin",
                element: <SignIn> </SignIn>


            },

            {
                path: "/signup",
                element: <SignUp> </SignUp>


            },


            {
                path: "*",
                element: <NotFound> </NotFound>


            }

        ]




    },



]);

// const Routes = () => {
//     return (
//         <div>

//         </div>
//     );
// };

export default router;