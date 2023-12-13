const EducationForm = () => {
  return (
    <>
      <div className="form-container">
        <h2>Education</h2>
        <div className="form-header">
          <h3>Company Name</h3>
          <button className="open">&#8226;</button>
          <button className="delete">&#x2715;</button>
        </div>
        <form>
          <label htmlFor="uni">University</label>
          <input type="text" name="uni" />
          <label htmlFor="acheivement">Acheivement</label>
          <input type="text" name="acheivement" />
          <label htmlFor="date">Year of Acheivement</label>
          <input type="text" name="date" />
          <input type="submit" className="submit" />
        </form>
      </div>
    </>
  );
};

export default EducationForm;
