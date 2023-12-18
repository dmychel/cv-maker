import PropTypes from "prop-types";

const EducationResume = ({ education }) => {
  return (
    <>
      <div className="edu-master">
        <h2>Education</h2>
        {education.map((edu) => (
          <div className="edu" key={edu.id}>
            <h3>{edu.uni}</h3>
            <p>{edu.date}</p>
            <p>{edu.achieve}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EducationResume;

EducationResume.propTypes = {
  education: PropTypes.array,
};
