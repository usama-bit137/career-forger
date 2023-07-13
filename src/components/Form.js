import React from "react";
import Experience from "./Experience";
import "../styles/Form.css";

export default function Form({
  personal,
  education,
  handleChange,
  isSubmitted,
  setIsSubmitted,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Somone tried to submit");
    setIsSubmitted((isSubmitted) => !isSubmitted);
    console.log(isSubmitted);
  }

  function educationAdd() {
    return (
      <Experience
        parentName="education"
        place="institution"
        what="major"
        handleChange={handleChange}
        item={education}
        id={education[0]}
      />
    );
  }

  return (
    <form className="form" name="form" onSubmit={handleSubmit}>
      <h1 className="call-to-action">
        Your Path to Professional Success Starts Here!
      </h1>
      <h4 className="call-to-action">Enter your details below:</h4>
      <p className="title">PERSONAL DETAILS</p>
      <form className="personal-form" name="personal">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={personal.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={personal.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={personal.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={personal.email}
          onChange={handleChange}
        />

        <textarea
          placeholder="Profile"
          value={personal.profile}
          name="profile"
          onChange={handleChange}
        />
      </form>
      <p className="title">EDUCATION</p>
      <Experience
        parentName="education"
        place="institution"
        what="major"
        handleChange={handleChange}
        item={education}
      />
      <button onClick={educationAdd}>Add Education</button>
      <button className="create-button">CREATE</button>
    </form>
  );
}
