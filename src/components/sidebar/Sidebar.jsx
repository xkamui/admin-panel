import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Sidebar() {
  const mainMenu = {
    dashboard: {
      Home: { name: "Home", icon: "HomeIcon" },
      Analytics: { name: "Analytics", icon: "TimelineIcon" },
      Sales: { name: "Sales", icon: "TrendingUpIcon" },
    },
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeIcon className="sidebarIcon" /> Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" /> Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
