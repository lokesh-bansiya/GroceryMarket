import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../AdminStyles/AdminSideHomePage.css";
import { getUsers } from "../../Redux/adminReducer/action";
import { AdminSideNavbar } from "../AdminPages/AdminSideNavbar";
import { AdminSideSingleAdminPage } from "../AdminPages/AdminSideSingleAdminPage";
import loading from "../../Assets/loadingforhome.gif";
import error from "../AdminAssets/serverError.gif";

const AdminSideHomePage = () => {
  const dispatch = useDispatch();
  const admins = useSelector((store) => store.adminReducer.users);
  const Loading = useSelector((store) => store.adminReducer.isLoading);
  const IsError = useSelector((store) => store.adminReducer.isError);

  useEffect(() => {
    if (admins.length === 0) {
      dispatch(getUsers());
    }
  }, [admins.length, dispatch]);

  return (
    <>
      <div>
        <div className="admin_heading">Grocery Mart Admins</div>
      </div>
      <div className="adminHomeContainer">
        <div>
          <AdminSideNavbar />
        </div>
        {Loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              zIndex: "10",
              width: "85%",
              paddingTop: "5%",
              marginLeft: "15%",
              height: "100vh",
              backgroundColor: "gray",
            }}
          >
            <div>
              <img
                style={{
                  width: "50%",
                  margin: "auto",
                  marginBottom: "5%",
                }}
                src={loading}
                alt="loading..."
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {IsError ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              zIndex: "10",
              width: "100%",
            }}
          >
            <div>
              <img
                style={{
                  width: "50%",
                  margin: "auto",
                }}
                src={error}
                alt="Server error...!"
              />
              <h1
                style={{
                  fontWeight: "bold",
                  color: "blue",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "150%",
                }}
              >
                Server Error! 503
              </h1>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="admin_grid_container">
          {admins.length &&
            admins
              .filter((item) => item.adminID === "GroceryMarket")
              .map((item) => {
                return (
                  <AdminSideSingleAdminPage
                    key={item._id}
                    id={item._id}
                    username={item.username}
                    email={item.email}
                    adminID={item.adminID}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};

export { AdminSideHomePage };
