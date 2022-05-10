import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EuroIcon from '@mui/icons-material/Euro';
import BarChartIcon from '@mui/icons-material/BarChart';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar() {

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
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutlineIcon className="sidebarIcon" /> Users
            </li>
            <li className="sidebarListItem">
              <StorefrontIcon className="sidebarIcon" /> Products
            </li>
            <li className="sidebarListItem">
              <EuroIcon className="sidebarIcon" /> Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
