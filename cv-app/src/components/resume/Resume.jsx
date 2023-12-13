import PersonalResume from "./PersonalResume";
import ExperienceResume from "./ExperienceResume";
import EducationResume from "./EducationResume";
import "../../styles/resume.css";

const Resume = () => {
  return (
    <>
      <section className="master-resume">
        <PersonalResume />
        <ExperienceResume />
        <EducationResume />
      </section>
    </>
  );
};

export default Resume;
