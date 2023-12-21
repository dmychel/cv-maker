import PropTypes from "prop-types";
import { useState } from "react";

const CreateEduForm = ({ education, setEducation }) => {
  const [uni, setUni] = useState("University Name");
  const [achieve, setAchieve] = useState("Acadmenic Accolade");
  const [date, setDate] = useState("2023");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = {
      uni: uni,
      achieve: achieve,
      date: date,
      id: crypto.randomUUID(),
    };
    setEducation([...education, newObject]);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
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
    </>
  );
};

export default CreateEduForm;

CreateEduForm.propTypes = {
  education: PropTypes.array,
  setEducation: PropTypes.func,
  item: PropTypes.object,
  deleteEdu: PropTypes.func,
};
