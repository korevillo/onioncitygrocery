import React, {useState} from 'react';
import Quiz from './components/Quiz';
import './App.css';

import allOnions from './images/all_onions.png';
import top4 from './images/top_4.png';
import bottom4 from './images/bottom_4.png';

const App = () => {

  const [showStartPage, setShowStartPage] = useState(true);

  const handleStartQuiz = () => {
    setShowStartPage(false);
  }

  return (
    <div className='center-horizontal'>
      <div className='center-vertical'>

        {showStartPage ? (
          <div className='start-page'>
            <img className='border-img' src={top4} alt=""/>

            <div className='text-content'>
              <h1 className='welcome-sign'>Welcome to</h1>
              <h1>Onion City Grocery</h1>
              <p>We've got a special deal on <span style={{fontWeight:'bold', color:'#4EAB10'}}>onions</span> today.
                Pick your other groceries first, 
                then we'll give you your special onion!</p>
              <button className='start-button' onClick={handleStartQuiz}>Let's go!</button>
            </div>

            <img className='border-img' src={bottom4} alt=""/>
          </div>
        ) : ( 
          <Quiz /> 
          
        )}


      </div>
      </div>
  )
};

export default App;
