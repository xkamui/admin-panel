import React from 'react'
import './topbar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <div className="topbarLeft">
              <span className="logo">LDS-Admin</span>
          </div>
          <div className="topbarRght">
            <div className="topbarIconsContainer">
                <NotificationsNoneIcon />
                <span className="topIconBadge">0</span>
            </div>
            <div className="topbarIconsContainer">
                <LanguageIcon />
                <span className="topIconBadge">0</span>
            </div>
            <div className="topbarIconsContainer">
                <SettingsIcon />
            </div>
            <figure className="topbarAvatar">
                <img src="https://cdn.discordapp.com/avatars/647907190618718227/7f1780d50f4d44294496c51fbfa758e2.webp" alt="Kamui Shirou" title="Kamui Shirou" />
            </figure>
          </div>
      </div>
    </div>
  )
}
