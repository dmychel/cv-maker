import { useState } from "react";
import "./App.css";
import Forms from "./components/forms/Forms";
import Resume from "./components/resume/Resume";

function App() {
  const [personal, setPersonal] = useState({});
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [expForms, setExpForms] = useState([]);
  const [eduForms, setEduForms] = useState([]);

  const createExpForm = () => {
    const newForm = {
      id: crypto.randomUUID(),
    };
    setExpForms([...expForms, newForm]);
  };

  const createEduForm = () => {
    const newForm = {
      id: crypto.randomUUID(),
    };
    setEduForms([...eduForms, newForm]);
  };

  const deleteExp = (item) => {
    const newExp = experience.filter((exp) => exp.id !== item);
    const newExpForm = expForms.filter((form) => form.id !== item);
    setExperience(newExp);
    setExpForms(newExpForm);
  };

  const deleteEdu = (item) => {
    const newEdu = education.filter((edu) => edu.id !== item);
    const newEduForm = eduForms.filter((form) => form.id !== item);
    setEducation(newEdu);
    setEduForms(newEduForm);
  };

  return (
    <>
      <section className="app">
        <Forms
          setPersonal={setPersonal}
          experience={experience}
          setExperience={setExperience}
          education={education}
          setEducation={setEducation}
          createExpForm={createExpForm}
          createEduForm={createEduForm}
          expForms={expForms}
          eduForms={eduForms}
          deleteExp={deleteExp}
          deleteEdu={deleteEdu}
        />
        <Resume
          personal={personal}
          experience={experience}
          education={education}
        />
      </section>
    </>
  );
}

export default App;
