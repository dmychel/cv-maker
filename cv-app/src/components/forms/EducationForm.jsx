import PropTypes from "prop-types";
import { useState } from "react";

const EducationForm = ({ education, setEducation }) => {
  const [uni, setUni] = useState("");
  const [achieve, setAchieve] = useState("");
  const [date, setDate] = useState("");

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
      <div className="form-container">
        <h2>Education</h2>
        <div className="form-header">
          <h3>Academic Accolade</h3>
          <button className="open">&#8226;</button>
          <button className="delete">&#x2715;</button>
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
    </>
  );
};

export default EducationForm;

EducationForm.propTypes = {
  education: PropTypes.array,
  setEducation: PropTypes.func,
};
