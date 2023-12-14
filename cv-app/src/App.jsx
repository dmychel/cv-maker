import { useState } from "react";
import "./App.css";
import Forms from "./components/forms/Forms";
import Resume from "./components/resume/Resume";

function App() {
  const [personal, setPersonal] = useState({});
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  return (
    <>
      <section className="app">
        <Forms
          setPersonal={setPersonal}
          experience={experience}
          setExperience={setExperience}
          education={education}
          setEducation={setEducation}
        />
        <Resume personal={personal} />
      </section>
    </>
  );
}

export default App;
