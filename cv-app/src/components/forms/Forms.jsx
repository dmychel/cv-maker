import PersonalForm from "./PersonalForm";
import ExperienceForm from "./Exp/ExperienceForm";
import EducationForm from "./Edu/EducationForm";
import "../../styles/forms.css";
import PropTypes from "prop-types";

const Forms = ({
  setPersonal,
  experience,
  setExperience,
  education,
  setEducation,
  createExpForm,
  createEduForm,
  expForms,
  eduForms,
  deleteExp,
  deleteEdu,
}) => {
  return (
    <>
      <section className="forms-master">
        <PersonalForm setPersonal={setPersonal} />
        <ExperienceForm
          experience={experience}
          setExperience={setExperience}
          createExpForm={createExpForm}
          expForms={expForms}
          deleteExp={deleteExp}
        />
        <EducationForm
          education={education}
          setEducation={setEducation}
          createEduForm={createEduForm}
          eduForms={eduForms}
          deleteEdu={deleteEdu}
        />
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
  createExpForm: PropTypes.func,
  createEduForm: PropTypes.func,
  expForms: PropTypes.array,
  eduForms: PropTypes.array,
  deleteExp: PropTypes.func,
  deleteEdu: PropTypes.func,
};
