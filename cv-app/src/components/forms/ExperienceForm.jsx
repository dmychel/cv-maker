const ExperienceForm = () => {
  return (
    <>
      <div className="form-container">
        <h2>Experience</h2>
        <div className="form-header">
          <h3>Company Name</h3>
          <button className="open">&#8226;</button>
          <button className="delete">&#x2715;</button>
        </div>
        <form>
          <label htmlFor="company">Company</label>
          <input type="text" name="name" />
          <label htmlFor="title">Title</label>
          <input type="text" name="email" />
          <label htmlFor="date">Start Date - End Date</label>
          <input type="text" name="date" />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
          <input type="submit" className="submit" />
        </form>
      </div>
    </>
  );
};

export default ExperienceForm;
