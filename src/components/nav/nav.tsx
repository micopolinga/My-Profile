import { Link, useLocation } from "react-router-dom";

// Types
import { INav } from "types/common";

// Constants
import { HOME } from "constants/path";

// Jsons
import Menus from "jsons/nav-titles.json";

// Styles
import "./nav.scss";

const Nav = ({ handleNavClick }: INav) => {
  const location = useLocation();
  const activeStr = "active";

  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        {Menus.titles.map((item, index) => (
          <li key={index}>
            <Link
              onClick={handleNavClick}
              to={!index ? HOME : `/${item.name}`}
              className={`${
                !index && location.pathname === HOME ? activeStr : ""
              } nav-link ${
                location.pathname === `/${item.name}` ? activeStr : ""
              }`}
            >
              <i className={`bi bi-${item.icon}`}></i>{" "}
              <span className="text-capitalize">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
