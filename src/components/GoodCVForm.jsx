import React, { useState } from 'react';

const CVForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [experience, setExperience] = useState([
    { company: '', position: '', duration: '' },
  ]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...experience];
    updatedExperience[index] = { ...updatedExperience[index], [name]: value };
    setExperience(updatedExperience);
  };

  const addExperienceField = () => {
    setExperience([...experience, { company: '', position: '', duration: '' }]);
  };

  return (
    <div>
      <h1>CV Form</h1>
      <form>
        <h2>Personal Information</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={personalInfo.name}
            onChange={handlePersonalInfoChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
          />
        </label>

        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </label>
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </label>
            <label>
              Duration:
              <input
                type="text"
                name="duration"
                value={exp.duration}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addExperienceField}>
          Add Experience
        </button>
      </form>

      <div>
        <h2>CV Preview</h2>
        <h3>Personal Information</h3>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>

        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Position: {exp.position}</p>
            <p>Duration: {exp.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVForm;