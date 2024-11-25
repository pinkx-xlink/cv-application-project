import './App.css';
import { useState } from 'react';

function App() {
 // const [index, setIndex] = useState(0);
  const [editGeneralInfo, setEditGeneralInfo] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editExperience, setEditExperience] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [yearsOfStudy, setYearsOfStudy] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleEditGeneralInfoClick() {
    setEditGeneralInfo(!editGeneralInfo);
  }
  function handleEditEducationClick() {
    setEditEducation(!editEducation);
  }
  function handleEditExperienceClick() {
    setEditExperience(!editExperience);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleFieldOfStudyChange(e) {
    setFieldOfStudy(e.target.value);
  }

  function handleYearsOfStudyChange(e) {
    setYearsOfStudy(e.target.value);
  }

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handlePositionTitleChange(e) {
    setPositionTitle(e.target.value);
  }

  function handleResponsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Creator Project</h1>
        <p>Enter your info and we'll take care of the rest!</p>
      </header>

      <div class="user-input">
          <div class="general-info"> 
            <h3>General Info</h3>
            {/* expand or collapse the "General Info" section on button click using a useState */}
            <button onClick={handleEditGeneralInfoClick}> {editGeneralInfo ? 'Submit' : 'Edit'} </button>
            {editGeneralInfo && 
            <>
              <label>
              First name: {' '}
              <input 
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </label>
            <label>
              Last name: {' '}
              <input 
                value={lastName}
                onChange={handleLastNameChange}
              />
            </label>
            <label>
              Email: {' '}
              <input 
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label>
              Phone number: {' '}
              <input
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
          </>}
          </div>

          <div class="education-exp">
            <h3>Educational Experience</h3>
            <button onClick={handleEditEducationClick}> {editEducation ? 'Submit' : 'Edit'} </button>
            {editEducation && 
              <>
              <label>
                School name: {' '}
                <input 
                  value={schoolName}
                  onChange={handleSchoolNameChange}
                />
              </label>
              <label>
                Field of study: {' '}
                <input 
                  value={fieldOfStudy}
                  onChange={handleFieldOfStudyChange}
                />
              </label>
              <label>
                Years of study: {' '}
                <input 
                  value={yearsOfStudy}
                  onChange={handleYearsOfStudyChange}
                />
              </label>
            </>}
          </div>

          <div class="practical-exp">
            <h3>Practical Experience</h3>
            <button onClick={handleEditExperienceClick}> {editExperience ? 'Submit' : 'Edit'} </button>
            {editExperience && 
              <>
              <label>
                Company name: {' '}
                <input
                  value={companyName}
                  onChange={handleCompanyNameChange}
                />
              </label>
              <label>
                Position title: {' '}
                <input 
                  value={positionTitle}
                  onChange={handlePositionTitleChange}
                />
              </label>
              <label>
                Responsibilities: {' '}
                <textarea
                  value={responsibilities}
                  onChange={handleResponsibilitiesChange}
                />
              </label>
            </>}
          </div>
        </div>

        <div id="cv-form">
          <h2>{fullName}</h2>
          <span>{phoneNumber} {email} </span>

          <h3>Educational Experience</h3>
          <p><b>{schoolName}</b></p>
          <p>{fieldOfStudy}</p>
          <p>{yearsOfStudy}</p>
          <h3>Practical Experience</h3>
          <p>{companyName}</p>
          <p>{positionTitle}</p>
          <p>Responsibilities:</p>
          <li>{responsibilities}</li>
        </div>
    </div>
  );
}

export default App;
