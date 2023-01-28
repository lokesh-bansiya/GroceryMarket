import React, { useEffect } from "react";
import "../AdminStyles/AdminSideNavbar.css";
import { Link } from "react-router-dom";
import black from "../AdminAssets/black.webp";
import admin from "../AdminAssets/admin.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../Redux/adminReducer/action";
import { AdminMenu } from "../../Menu/AdminMenu";

const AdminSideNavbar = () => {
  const user = useSelector((store) => store.adminReducer.userprofile);
  const dispatch = useDispatch();
  const userKey = localStorage.getItem("userKey");

  useEffect(() => {
    dispatch(getUserProfile(userKey));
  }, [userKey, dispatch]);

  return (
    <div className="admin_navbar_outerbox">
      <div className="MenuPanel">
        <AdminMenu />
      </div>
      <div className="adminSideDisplaynone">
        <div className="AdminSideProfile">
          <div>
            <img src={admin} alt="Admin" />
          </div>
          <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      <div className="admin_navbar">
        <div>
          <Link to="/admin_dashboard">
            <div>Dashboard</div>
          </Link>
        </div>
        <div>
          <Link to="/admin_side_admins">Admins</Link>
        </div>
        <div>
          <Link to="/admin_side_products">
            <div>Products</div>
          </Link>
        </div>
        <div>
          <Link to="/admin_side_users">
            <div>Users</div>
          </Link>
        </div>
        <div>
          <Link to="/admin_side_add_product">
            <div>Add Product</div>
          </Link>
        </div>
        <div>
          <Link to="/admin_side_add_product">
            <div>Cart Details</div>
          </Link>
        </div>
        <div>
          <Link to="/admin_side_add_product">
            <div>Order Details</div>
          </Link>
        </div>
        <div>
          <Link to="/admin_side_add_product">
            <div>
              <img src={black} alt="graph" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AdminSideNavbar };
