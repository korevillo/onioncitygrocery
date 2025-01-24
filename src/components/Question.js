import React from "react";
import "../styles/Question.css"

function Question({ question, options, onAnswer, selectedAnswer }) {
    return (
        <div className="question-answers">
            <h1 className="question-title">{question}</h1>

            {options.map((option, index) => {
                
                return (
                    <button
                        key={index}
                        onClick={() => onAnswer(option.onion)}
                        className={selectedAnswer === option.onion ? "selected" : ""}
                    >
                        <div className='button-name'>{option.title}</div>
                        <div className='button-detail'>{option.description}</div>
                    </button>
                );
            })}
        </div>
    );
}


export default Question;