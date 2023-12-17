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

  const deleteExpItem = (form) => {
    const newExpForm = expForms.filter((item) => item.id !== form.id);
    setExperience(newExpForm);
    setExpForms(newExpForm);

    // const expItem = item.filter((exp) => exp.id === exp.id);
    // console.log(expItem);
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
          deleteExpItem={deleteExpItem}
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
