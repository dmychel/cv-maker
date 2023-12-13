import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import "../../styles/forms.css";

const Forms = () => {
  return (
    <>
      <section className="forms-master">
        <PersonalForm />
        <ExperienceForm />
        <EducationForm />
      </section>
    </>
  );
};

export default Forms;
