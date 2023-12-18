import PropTypes from "prop-types";

const ExperienceResume = ({ experience }) => {
  return (
    <>
      <div className="exp-master">
        <h2>Experience</h2>
        {experience.map((item) => (
          <div className="exp" key={item.id}>
            <h3>{item.company}</h3>
            <p>{item.date}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceResume;

ExperienceResume.propTypes = {
  experience: PropTypes.array,
};
