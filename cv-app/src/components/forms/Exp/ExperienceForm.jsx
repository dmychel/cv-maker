import PropTypes from "prop-types";
import CreateExpForm from "./CreateExpForm";
import EditExp from "./EditExp";

const ExperienceForm = ({
  experience,
  setExperience,
  createExpForm,
  deleteExp,
}) => {
  return (
    <>
      <div className="forms-container">
        <h2>Experience</h2>
        <CreateExpForm
          experience={experience}
          setExperience={setExperience}
          deleteExp={deleteExp}
        />
        {experience.map((item) => (
          <div className="edit-exp-container" key={item.id}>
            <EditExp
              item={item}
              experience={experience}
              setExperience={setExperience}
              className="edit-container"
            />
          </div>
        ))}
        <div className="add-item-container">
          <button className="add-item" onClick={createExpForm}>
            &#43;
          </button>
        </div>
      </div>
    </>
  );
};

export default ExperienceForm;

ExperienceForm.propTypes = {
  experience: PropTypes.array,
  setExperience: PropTypes.func,
  createExpForm: PropTypes.func,
  deleteExp: PropTypes.func,
};
