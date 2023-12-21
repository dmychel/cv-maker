import PropTypes from "prop-types";
import { useState } from "react";

const EditExp = ({ item, experience, setExperience }) => {
  const [company, setCompany] = useState(item.company);
  const [title, setTitle] = useState(item.title);
  const [date, setDate] = useState(item.date);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (e, item) => {
    e.preventDefault();
    const newItem = {
      company: company,
      title: title,
      date: date,
      description: description,
      id: crypto.randomUUID(),
    };
    const indexExp = experience.indexOf(item);
    experience.splice(indexExp, 1, newItem);
    const newExp = experience;
    setExperience([...newExp]);
  };

  const toggleEvent = (item) => {
    const button = document.getElementById(item);
    button.classList.toggle("inactive");
  };

  return (
    <>
      <h3 onClick={() => toggleEvent(item.id)}>{company}</h3>
      <div className="edit-form inactive" id={item.id}>
        <form onSubmit={(e) => handleSubmit(e, item)}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="date">Start Date - End Date</label>
          <input
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="submit" className="submit" />
        </form>
      </div>
    </>
  );
};

export default EditExp;

EditExp.propTypes = {
  item: PropTypes.object,
  experience: PropTypes.array,
  setExperience: PropTypes.func,
};
