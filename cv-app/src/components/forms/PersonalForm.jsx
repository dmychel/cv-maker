const PersonalForm = () => {
  return (
    <>
      <div className="form-container">
        <h2>Personal Information</h2>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <label htmlFor="number">Number</label>
          <input type="text" name="number" />
          <label htmlFor="other">Other</label>
          <input type="text" name="other" />
          <input type="submit" className="submit" />
        </form>
      </div>
    </>
  );
};

export default PersonalForm;
