import PropTypes from "prop-types";

const PersonalResume = ({ personal }) => {
  return (
    <>
      <div className="personal">
        <h2>{personal.name}</h2>
        <div className="contact">
          <p>{personal.email}</p>
          <p>{personal.number}</p>
          <p>{personal.other}</p>
        </div>
      </div>
    </>
  );
};

export default PersonalResume;

PersonalResume.propTypes = {
  personal: PropTypes.object,
};
