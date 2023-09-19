import React, { useState } from 'react';
import './App.css'

function App() {
  const initialPerson = {
    fullName: 'Abdelouahed',
    bio: 'A passionate developer',
    imgSrc: 'web developer.jpg',
    profession: 'developer junior',
  };

  const [person, setPerson] = useState(initialPerson);
  const [shows, setShows] = useState(true);
  const [timeInterval, setTimeInterval] = useState(0);
  const [countdownRunning, setCountdownRunning] = useState(false);

  const toggleShow = () => {
    setShows(!shows);
  };

  const startCountdown = () => {
    if (countdownRunning) {
      // Reset the countdown and clear the interval
      setTimeInterval(0);
      clearInterval(intervalRef.current);
      setCountdownRunning(false);
    } else {
      // Start the countdown
      const interval = setInterval(() => {
        setTimeInterval((prevTime) => prevTime + 1);
      }, 1000);
      intervalRef.current = interval;
      setCountdownRunning(true);
    }
  };

  const resetInterval = () => {
    setTimeInterval(0);
  };

  // Ref to store the interval ID
  const intervalRef = React.useRef(null);

  return (
    <div className='d1'>
    <div className="App">
      <h1>Profile App</h1>
      <button onClick={toggleShow}>Toggle Profile</button>
      <button onClick={startCountdown}>
        {countdownRunning ? 'Stop Countdown' : 'Start Countdown'}
      </button>
      <button onClick={resetInterval}>Reset Interval</button>
      <p>Time Interval: {timeInterval} seconds</p>
      {shows && (
        <div className='container'>
          <h2 className='nom'>{person.fullName}</h2>
          <p className='bio'>{person.bio}</p>
          <img className='image' src={person.imgSrc} alt={person.fullName} />
          <p>{person.profession}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;