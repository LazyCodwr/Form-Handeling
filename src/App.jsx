import React, { useState, useEffect } from 'react'
import Login from './Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Set a timer to update the state after 2 seconds
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {showLogin ? <Login /> : <h2>Loading login...</h2>}
    </div>
  );
}

export default App