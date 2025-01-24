import React from "react";
import "../styles/Result.css"

function Result({ onion, compatible, description, onionImage, compatibleImage, restartQuiz }) {
  return (
    <div className='resultArea'>
      <div className="resultContainer">
        <div className='resultHeader'>
          <h1 className="headerTitle">♡₊˚ Your Onion Assignment・₊✧</h1>
        </div>

        <div className='resultOnion'>
            <div className="resultOnionTop">
                <img className="resultImage" src={onionImage} alt={onion} />
                <h1 className="resultName">{onion}</h1>
            </div>
            <p className="description">{description}</p>
        </div>

        <h2 className="pairTitle">⋆⭒ Your Produce Pal ˚｡⋆</h2>

        <div className="compatOnion">
            <h2 className="compatName">{compatible}</h2>
            <img className="compatImage" src={compatibleImage} alt={compatible} />
        </div>
        
        <div className='attribution'><a href="https://instagram.com/notekating" target="_blank" rel="noopener noreferrer">Onion City Grocery Quiz by IG@notekating</a></div>
      </div>


      <div className="retakeBtn">
        <button className='quizAgain' onClick={restartQuiz}>Take the Quiz Again &gt;</button>
      </div>
      
    </div>
  );
}

export default Result;