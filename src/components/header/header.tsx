import { useState } from 'react';

// Components
import Navagition from 'components/nav';

// Constants
import { NAME } from 'constants/common';

// Assets
import Profile from 'assets/img/self.jpg';

// Jsons
import SocialMedias from 'jsons/social-medias.json';

// Styles
import './header.scss';

const Header = () => {
  const [listIcon, xIcon] = ['list', 'x'];
  const [menuIcon, setMenuIcon] = useState<string>(listIcon);

  const handleToggleIcon = () => {
    setMenuIcon((prev) => (prev === listIcon ? xIcon : listIcon));
  };

  const handleNavClick = () => {
    setMenuIcon(listIcon);
  };

  return (
    <div className={`${menuIcon === xIcon ? 'mobile-nav-active' : ''}`}>
      <i
        className={`mobile-nav-toggle d-xl-none bi bi-${menuIcon}`}
        onClick={handleToggleIcon}
      ></i>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={Profile} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">{NAME}</h1>
            <div className="social-links mt-3 text-center">
              {SocialMedias.medias.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={item.name}
                  target="blank"
                >
                  <i className={`bi bi-${item.name}`}></i>
                </a>
              ))}
            </div>
          </div>
          <Navagition handleNavClick={handleNavClick} />
        </div>
      </header>
    </div>
  );
};

export default Header;
