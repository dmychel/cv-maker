import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import "../../styles/forms.css";
import PropTypes from "prop-types";

const Forms = ({
  setPersonal,
  experience,
  setExperience,
  education,
  setEducation,
}) => {
  return (
    <>
      <section className="forms-master">
        <PersonalForm setPersonal={setPersonal} />
        <ExperienceForm experience={experience} setExperience={setExperience} />
        <EducationForm education={education} setEducation={setEducation} />
      </section>
    </>
  );
};

export default Forms;

Forms.propTypes = {
  setPersonal: PropTypes.func,
  experience: PropTypes.array,
  setExperience: PropTypes.func,
  education: PropTypes.array,
  setEducation: PropTypes.func,
};
