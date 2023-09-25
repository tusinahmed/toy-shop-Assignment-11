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
import Privateroute from './Privateroute';
import Toyinfo from '../Toyinfo/Toyinfo';
import Edittoys from '../Edittoys/Edittoys';
import AllFulltoys from '../AllFulltoys/AllFulltoys';

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
                element: <AllFulltoys> </AllFulltoys>

            },

            {
                path: "/mytoys",
                element: <Privateroute>  <MyToys> </MyToys> </Privateroute>,

            },


            {
                path: "/addnewtoy",
                element: <AddToys> </AddToys>,


            },

            {
                path: "/edittoy/:id",
                element: <Edittoys> </Edittoys>,
                loader: ({ params }) => fetch(`http://localhost:3000/alltoys/${params.id}`)


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
                path: "/alltoy/:id",
                element: <Privateroute>  <Toyinfo> </Toyinfo> </Privateroute>,
                loader: ({ params }) => fetch(`http://localhost:3000/alltoys/${params.id}`)


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