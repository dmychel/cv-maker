import PropTypes from "prop-types";
import { useState } from "react";

const EducationForm = ({
  education,
  setEducation,
  createEduForm,
  eduForms,
  deleteEdu,
}) => {
  const [uni, setUni] = useState("University Name");
  const [achieve, setAchieve] = useState("Acadmenic Accolade");
  const [date, setDate] = useState("2023");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = {
      uni: uni,
      achieve: achieve,
      date: date,
    };
    setEducation([...education, newObject]);
  };

  return (
    <>
      <div className="forms-container">
        <h2>Education</h2>
        {eduForms.map((item) => (
          <div className="form-container" key={item.id}>
            <div className="form-header">
              <h3>{uni}</h3>
              <button className="open">&#8226;</button>
              <button className="delete" onClick={() => deleteEdu(item.id)}>
                &#x2715;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="uni">University</label>
              <input
                type="text"
                name="uni"
                value={uni}
                onChange={(e) => setUni(e.target.value)}
              />
              <label htmlFor="acheivement">Achievement</label>
              <input
                type="text"
                name="acheivement"
                value={achieve}
                onChange={(e) => setAchieve(e.target.value)}
              />
              <label htmlFor="date">Year of Achievement</label>
              <input
                type="text"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input type="submit" className="submit" />
            </form>
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
