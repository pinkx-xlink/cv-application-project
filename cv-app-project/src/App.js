import './App.css';
import { useState, useReducer } from 'react';
import Text from './components/Text';
import InputFieldsList from './components/InputFieldsList';
import infoReducer, { initialState } from './components/infoReducer';



function App() {
  const cv = document.querySelector('.cv');
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const [editGeneralInfo, setEditGeneralInfo] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editExperience, setEditExperience] = useState(false);

  const [firstName, setFirstName] = useState('Your Name');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('example123@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('(123) 456-7891');
  const [schoolName, setSchoolName] = useState('School Name');
  const [fieldOfStudy, setFieldOfStudy] = useState('Field of Study');
  const [yearsOfStudy, setYearsOfStudy] = useState('20XX-20XX');
  // Add 'I work/study here currently' option
  const [companyName, setCompanyName] = useState('Company Name');
  const [positionTitle, setPositionTitle] = useState('Position Title');
  const [responsibilities, setResponsibilities] = useState('Responsibilities');

  const fullName = firstName + ' ' + lastName;
  const userInput = document.querySelector('.user-input');
  
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
            <button 
            onClick={handleEditGeneralInfoClick}> 
            {editGeneralInfo ? 'Submit' : 'Edit'}  </button>
           
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

        <button onClick={toggleDarkMode}>
            Toggle to {darkMode ? 'Light' : 'Dark'} Theme
          </button>
        <div 
        id="cv-form"
        className={darkMode ? 'dark-mode' : 'light-mode'}>
        
         

          <div className="cv">
            <div className='personal-info-container'>
              <h2>{fullName}</h2>
              <span>{phoneNumber} {email} </span>
            </div>

            <div className='education-container'>
              <h3>Educational Experience</h3>
              <p><b>{schoolName}</b></p>
              <p>{fieldOfStudy}</p>
              <p>{yearsOfStudy}</p>
            </div>
            
            <div className='experience-container'>
              <h3>Practical Experience</h3>
              <p>{companyName}</p>
              <p>{positionTitle}</p>
              <li>{responsibilities}</li>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
