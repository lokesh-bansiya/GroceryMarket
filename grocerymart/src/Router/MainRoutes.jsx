import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "../Pages/Home";
import {Product} from "../Pages/Product";
import PrivateRoute from "../Components/PrivateRoute";
import { CartPage } from "../Pages/CartPage";

const MainRoutes = () => {
    return (
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<PrivateRoute><Product/></PrivateRoute>}/>
            <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>}/>
           </Routes>
        );
};

export {MainRoutes}