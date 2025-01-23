import React from "react";
import "../styles/Result.css"

function Result({ onion, compatible, description, onionImage, compatibleImage, restartQuiz }) {
  return (
    <div className='borderedArea'>
      <div className="resultContainer">
        <div className='resultHeader'>
          <h3>⋆˙𐙚 Your Special Drink ❅˙⋆</h3>
        </div>
        
        <div className='attribution'><a href="https://instagram.com/notekating" target="_blank" rel="noopener noreferrer">Cozy Cabin Cafe Quiz by IG@notekating</a></div>
      </div>
      
      <button className='quizAgain' onClick={restartQuiz}>Take the Quiz Again &gt;</button>
    </div>
  );
}

export default Result;