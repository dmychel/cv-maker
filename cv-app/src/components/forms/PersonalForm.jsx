import PropTypes from "prop-types";
import { useState } from "react";

const PersonalForm = ({ setPersonal }) => {
  const [name, setName] = useState("Full Name");
  const [email, setEmail] = useState("mail@mail.com");
  const [number, setNumber] = useState("(000) 000 0000");
  const [other, setOther] = useState("github.com/github");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = {
      name: name,
      email: email,
      number: number,
      other: other,
    };
    setPersonal(newObject);
  };

  return (
    <>
      <div className="forms-container">
        <h2 className="personal-h2">Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="number">Number</label>
          <input
            type="text"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label htmlFor="other">Other</label>
          <input
            type="text"
            name="other"
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />
          <input type="submit" className="submit" />
        </form>
      </div>
    </>
  );
};

export default PersonalForm;

PersonalForm.propTypes = {
  setPersonal: PropTypes.func,
};
