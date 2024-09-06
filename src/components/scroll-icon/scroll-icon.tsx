import { useEffect, useState } from 'react';

// Styles
import './scroll-icon.scss';

const ScrollIcon = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <a
      href="#"
      className={`back-to-top d-flex align-items-center justify-content-center ${
        isVisible ? 'active' : ''
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollIcon;
