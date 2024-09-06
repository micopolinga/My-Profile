import { useEffect } from 'react';

// Components
import Skills from 'components/skills';

const SkillsMain = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return <Skills />;
};

export default SkillsMain;
