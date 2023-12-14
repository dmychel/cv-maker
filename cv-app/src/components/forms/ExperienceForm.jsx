import PropTypes from "prop-types";
import { useState } from "react";

const ExperienceForm = ({ experience, setExperience }) => {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = {
      company: company,
      title: title,
      date: date,
      description: description,
    };
    setExperience([...experience, newObject]);
  };
  return (
    <>
      <div className="form-container">
        <h2>Experience</h2>
        <div className="form-header">
          <h3>Company Name</h3>
          <button className="open">&#8226;</button>
          <button className="delete">&#x2715;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
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

export default ExperienceForm;

ExperienceForm.propTypes = {
  experience: PropTypes.array,
  setExperience: PropTypes.func,
};
