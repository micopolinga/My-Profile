import parse from 'html-react-parser';

// Constants
import { NAME } from 'constants/common';
import { RESUME_TEXT_1, } from 'constants/common';

// Jsons
import Profiles from 'jsons/profiles.json';
// import Experiences from 'jsons/experiences.json';

// Styles
import './resume.scss';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>{RESUME_TEXT_1}</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{NAME}</h4>
            
              <ul>
                {Profiles.data_3.map((item, index) => (
                  <li key={index}>{parse(item)}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {Profiles.data_4.map((item, index) => (
              <div key={index} className="resume-item">
                <h4>{item.title}</h4>
                <h5>{item.year}</h5>
                <p>
                  <em>{item.school}</em>
                </p>
                <p>{item.address}</p>
              </div>
            ))}
          </div>
          {/* <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {Experiences.companies.map((item, index) => {
              const { company, title, duration, tasks } = item;
              return (
                <div key={index} className="resume-item">
                  <h4>{title}</h4>
                  <h5>{duration}</h5>
                  <p>
                    <em>{company}</em>
                  </p>
                  <ul>
                    {tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Resume;
