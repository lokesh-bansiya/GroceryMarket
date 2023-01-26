import "../AdminStyles/AdminSideHomePage.css";
import { AdminSideNavbar } from "../AdminPages/AdminSideNavbar";
import { AdminSideSingleUser } from "../AdminPages/AdminSideSingleUser";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/adminReducer/action";
import { useEffect } from "react";
import loading from "../../Assets/loadingforhome.gif";
import error from "../AdminAssets/serverError.gif";

const AdminSideUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.adminReducer.users);
  const Loading = useSelector((store) => store.adminReducer.isLoading);
  const IsError = useSelector((store) => store.adminReducer.isError);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [users.length, dispatch]);

  return (
    <>
      <div>
        <div className="admin_heading">Grocery Mart Users</div>
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
          {users.length &&
            users.map((item) => {
              return (
                <AdminSideSingleUser
                  key={item._id}
                  id={item._id}
                  username={item.username}
                  email={item.email}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export { AdminSideUsers };
