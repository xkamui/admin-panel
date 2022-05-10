import VisibilityIcon from "@mui/icons-material/Visibility";
import "./widgetSmall.css";

export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <figure className="widgetSmallUserDatas">
            <img
              src="https://cdn.discordapp.com/avatars/647907190618718227/7f1780d50f4d44294496c51fbfa758e2.webp"
              alt="Kamui Shirou - Super Admin"
              title="Kamui Shirou - Super Admin"
            />
            <figcaption>
              <span className="widgetSmallUsername">Kamui Shirou</span>
              <span className="widgetSmallJobTitle">Super Admin</span>
            </figcaption>
          </figure>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <figure className="widgetSmallUserDatas">
            <img
              src="https://i.imgur.com/cQMEK8n.png"
              alt="Jean-Claude Convenant - Commercial raté"
              title="Jean-Claude Convenant - Commercial raté"
            />
            <figcaption>
              <span className="widgetSmallUsername">Jean-Claude Convenant</span>
              <span className="widgetSmallJobTitle">Commercial raté</span>
            </figcaption>
          </figure>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <figure className="widgetSmallUserDatas">
            <img
              src="https://i.imgur.com/uzGcA4U.png"
              alt="Patrick Chirac - Campeur au grand cœur"
              title="Patrick Chirac - Campeur au grand cœur"
            />
            <figcaption>
              <span className="widgetSmallUsername">Patrick Chirac</span>
              <span className="widgetSmallJobTitle">Campeur au grand cœur</span>
            </figcaption>
          </figure>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <figure className="widgetSmallUserDatas">
            <img
              src="https://i.imgur.com/wMr4wIq.png"
              alt="David Goodenough - Développeur ?"
              title="David Goodenough - Développeur ?"
            />
            <figcaption>
              <span className="widgetSmallUsername">David Goodenough</span>
              <span className="widgetSmallJobTitle">Développeur ?</span>
            </figcaption>
          </figure>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <figure className="widgetSmallUserDatas">
            <img
              src="https://i.imgur.com/ZwBLIW0.png"
              alt="Barney Stinson - Dragueur"
              title="Barney Stinson - Dragueur"
            />
            <figcaption>
              <span className="widgetSmallUsername">Barney Stinson</span>
              <span className="widgetSmallJobTitle">Dragueur</span>
            </figcaption>
          </figure>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
