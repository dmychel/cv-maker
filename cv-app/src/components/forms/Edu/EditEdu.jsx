import PropTypes from "prop-types";
import { useState } from "react";

const EditEdu = ({ item, education, setEducation, deleteEdu }) => {
  const [uni, setUni] = useState("University Name");
  const [achieve, setAchieve] = useState("Acadmenic Accolade");
  const [date, setDate] = useState("2023");

  const handleSubmit = (e, item) => {
    e.preventDefault();
    const newItem = {
      uni: uni,
      achieve: achieve,
      date: date,
      id: crypto.randomUUID(),
    };
    const indexEdu = education.indexOf(item);
    education.splice(indexEdu, 1, newItem);
    const newEdu = education;
    setEducation([...newEdu]);
  };

  const toggleEvent = (item) => {
    const button = document.getElementById(item);
    button.classList.toggle("inactive");
  };

  return (
    <>
      <h3 onClick={() => toggleEvent(item.id)}>{uni}</h3>
      <div className="edit-form inactive" id={item.id}>
        <div className="delete-btn-container">
          <button className="delete" onClick={() => deleteEdu(item)}>
            Delete Item
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e, item)}>
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

export default EditEdu;

EditEdu.propTypes = {
  item: PropTypes.object,
  education: PropTypes.array,
  setEducation: PropTypes.func,
  deleteEdu: PropTypes.func,
};
