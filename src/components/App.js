import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import Render from "./Render";
import Footer from "./Footer";
import cvState from "../cvState.js";

export default function App() {
  const [fields, setFields] = useState(cvState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, parentElement } = e.target,
      parentName = parentElement.name;

    setFields({
      ...fields,
      [parentName]: {
        ...fields[parentName],
        [name]: value,
      },
    });
  };

  return (
    <main className="main">
      <Header />
      {!isSubmitted ? (
        <Form
          personal={fields.personal}
          education={fields.education}
          handleChange={handleChange}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <>
          <button
            className="back-button"
            onClick={() => {
              setIsSubmitted((isSubmitted) => !isSubmitted);
            }}
          >
            Back
          </button>
          <Render personal={fields.personal} education={fields.education} />
        </>
      )}
      <Footer />
    </main>
  );
}
