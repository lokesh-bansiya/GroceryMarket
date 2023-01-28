import "../AdminStyles/AdminDashboard.css";
import { AdminSideNavbar } from "../AdminPages/AdminSideNavbar";
import circularOther from "../AdminAssets/cicularOther.png";
import main from "../AdminAssets/main.gif";
import gif1graph from "../AdminAssets/gif1graph.gif";
import weekly from "../AdminAssets/weekly.png";

const AdminDashboard = () => {
  return (
    <div className="AdminDashboardContainer">
      <div className="AdminDashboardContainer_Box1">
        <AdminSideNavbar />
      </div>
      <div className="AdminDashboardContainer_Box2">
        <div>Admin Dashboard</div>
        <div className="ImgContainer1">
          <div>
            <img src={circularOther} alt="" />
          </div>
          <div>
            <img src={main} alt="" />
          </div>
        </div>
        <div className="ImgContainer2">
          <div>
            <img src={weekly} alt="" />
          </div>

          <div>
            <img src={gif1graph} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminDashboard };
