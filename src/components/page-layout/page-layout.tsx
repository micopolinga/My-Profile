import { Outlet } from 'react-router-dom';

// Components
import Header from 'components/header';
import ScrollIcon from 'components/scroll-icon';

// Styles
import './page-layout.scss';

const PageLayout = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <ScrollIcon />
    </>
  );
};

export default PageLayout;
