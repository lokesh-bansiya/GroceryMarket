import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Product } from "../Pages/Product";
import PrivateRoute from "../Components/PrivateRoute";
import { CartPage } from "../Pages/CartPage";
import {AdminSideHomePage} from "../AdminSide/AdminPages/AdminSideHomePage";
import {AdminSideUsers} from "../AdminSide/AdminPages/AdminSideUsers";
import {AdminSideProducts} from "../AdminSide/AdminPages/AdminSideProducts";
import {AdminSideAddProducts} from "../AdminSide/AdminPages/AdminSideAddProducts";
import {AdminSideProductEditPage} from "../AdminSide/AdminPages/AdminSideProductEditPage";
import { AdminDashboard } from "../AdminSide/AdminPages/AdminDashboard";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<PrivateRoute><Product /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
            <Route path="/admin_dashboard" element={<PrivateRoute><AdminDashboard/></PrivateRoute>}/>
            <Route path="/admin_side_admins" element={<PrivateRoute><AdminSideHomePage /></PrivateRoute>} />
            <Route path="/admin_side_users" element={<PrivateRoute><AdminSideUsers /></PrivateRoute>} />
            <Route path='/admin_side_products' element={<PrivateRoute><AdminSideProducts /></PrivateRoute>} />
            <Route path="/admin_side_add_product" element={<PrivateRoute><AdminSideAddProducts /></PrivateRoute>} />
            <Route path="/admin_side_product_edit_page/:id" element={<PrivateRoute><AdminSideProductEditPage /></PrivateRoute>} />
        </Routes>
    );
};

export { MainRoutes }