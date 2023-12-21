import { useState } from "react";
import PropTypes from "prop-types";

const CreateExpForm = ({ experience, setExperience }) => {
  const [company, setCompany] = useState("Company Name");
  const [title, setTitle] = useState("Job Title");
  const [date, setDate] = useState("01/2020 - PRES");
  const [description, setDescription] = useState("Brief Description");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = {
      company: company,
      title: title,
      date: date,
      description: description,
      id: crypto.randomUUID(),
    };
    setExperience([...experience, newObject]);
  };

  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <h3>{company}</h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
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

export default CreateExpForm;

CreateExpForm.propTypes = {
  experience: PropTypes.array,
  setExperience: PropTypes.func,
  item: PropTypes.object,
};
