import PersonalResume from "./PersonalResume";
import ExperienceResume from "./ExperienceResume";
import EducationResume from "./EducationResume";
import "../../styles/resume.css";
import PropTypes from "prop-types";

const Resume = ({ personal, experience, education }) => {
  return (
    <>
      <section className="master-resume">
        <PersonalResume personal={personal} />
        <ExperienceResume experience={experience} />
        <EducationResume education={education} />
      </section>
    </>
  );
};

export default Resume;

Resume.propTypes = {
  personal: PropTypes.object,
  experience: PropTypes.array,
  education: PropTypes.array,
};
