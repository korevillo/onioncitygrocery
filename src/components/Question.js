import React from "react";
import "../styles/Question.css"

function Question({ options, onAnswer, selectedAnswer }) {
    return (
        <div className="question-answers">
            {options.map((option, index) => {
                const rotation = index === 0  ? 'rotate(3deg)' : 'rotate(-3deg)';
                
                return (
                    <button
                        key={index}
                        onClick={() => onAnswer(option.onion)}
                        className={selectedAnswer === option.onion ? "selected" : ""}
                        style={{ transform: rotation }}
                    >
                        {option.title}
                        {option.description}
                    </button>
                );
            })}
        </div>
    );
}


export default Question;