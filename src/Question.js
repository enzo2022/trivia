import React from 'react';

function Question({ question, options, onSelectAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {options.map((option) => (
        <button key={option} onClick={() => onSelectAnswer(option)}>  {option}</button>  
          
         
        ))}
      </div>
    </div>
  );
}

export default Question;
