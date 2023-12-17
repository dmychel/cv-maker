import PropTypes from "prop-types";
import { useState } from "react";

const ExperienceForm = ({
  experience,
  setExperience,
  createExpForm,
  expForms,
  deleteExp,
}) => {
  const [company, setCompany] = useState("Company Name");
  const [title, setTitle] = useState("Job Title");
  const [date, setDate] = useState("01/2020 - PRES");
  const [description, setDescription] = useState("Brief Description");

  const handleSubmit = (e, item) => {
    e.preventDefault();
    const newObject = {
      company: company,
      title: title,
      date: date,
      description: description,
      id: item.id,
    };
    setExperience([...experience, newObject]);
  };

  return (
    <>
      <div className="forms-container">
        <h2>Experience</h2>
        {expForms.map((item) => (
          <div className="form-container" key={item.id}>
            <div className="form-header">
              <h3>{company}</h3>
              <button className="open">&#8226;</button>
              <button className="delete" onClick={() => deleteExp(item.id)}>
                &#x2715;
              </button>
            </div>
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
  expForms: PropTypes.array,
  deleteExp: PropTypes.func,
};
