import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [yearsOfStudy, setYearsOfStudy] = useState('');
  const [companyName, setCompanyName] = useState('');
  const fullName = firstName + ' ' + lastName;
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Creator Project</h1>
        <p>Enter your info and we'll take care of the rest!</p>
        <div class="general-info"> 
          <h3>General Info</h3>
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
        </div>

        <div class="education-exp">
          <h3>Educational Experience</h3>
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
        </div>

        <div class="practical-exp">
          <h3>Practical Experience</h3>
          <label>
            Company name: {' '}
            <input
              value={companyName}
              onChange={handleCompanyNameChange}
            />
          </label>
        </div>


        <div id="cv-form">
          <h2>{fullName}</h2>
          <span>{phoneNumber} {email} </span>

          <h3>Educational Experience</h3>
          <p><b>{schoolName}</b></p>
          <p>{fieldOfStudy}</p>
          <h3>Practical Experience</h3>
          <p>{companyName}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
