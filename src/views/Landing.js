import React from 'react';
import '../styles/index.scss';
import Presentation from '../components/Presentation';
import SignUp from '../components/SignUp';

function App() {
  return (
    <div className="landing__container">
      <Presentation />
      <SignUp />
    </div>
  );
}

export default App;
