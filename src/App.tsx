import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import PageLayout from "components/page-layout";

// Pages
import Home from "pages/home";
import Resume from "pages/resume-main";
import Skills from "pages/skills-main";

// Constants
import { HOME, RESUME, SKILLS } from "constants/path";

// Styles
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={HOME} element={<Home />} />
          <Route path={RESUME} element={<Resume />} />
          <Route path={SKILLS} element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
