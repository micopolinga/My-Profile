import { useEffect } from 'react';

// Components
import About from 'components/about';

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return <About />;
};

export default Home;
