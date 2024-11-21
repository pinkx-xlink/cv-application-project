import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Creator Project</h1>
        <p>Enter your info and we'll take care of the rest!</p>

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

        <div>
          <h2>{fullName}</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
