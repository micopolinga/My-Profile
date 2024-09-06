import { useEffect } from 'react';

// Components
import Resume from 'components/resume';

const ResumeMain = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return <Resume />;
};

export default ResumeMain;
