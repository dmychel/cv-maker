import PropTypes from "prop-types";
import CreateEduForm from "./CreateEduForm";
import EditEdu from "./EditEdu";

const EducationForm = ({
  education,
  setEducation,
  createEduForm,
  deleteEdu,
}) => {
  return (
    <>
      <div className="forms-container">
        <h2>Education</h2>
        <CreateEduForm
          education={education}
          setEducation={setEducation}
          deleteExp={deleteEdu}
        />
        {education.map((item) => (
          <div className="edit-edu-container" key={item.id}>
            <EditEdu
              item={item}
              education={education}
              setEducation={setEducation}
            />
          </div>
        ))}
        <div className="add-item-container">
          <button className="add-item" onClick={createEduForm}>
            &#43;
          </button>
        </div>
      </div>
    </>
  );
};

export default EducationForm;

EducationForm.propTypes = {
  education: PropTypes.array,
  setEducation: PropTypes.func,
  createEduForm: PropTypes.func,
  eduForms: PropTypes.array,
  deleteEdu: PropTypes.func,
};
