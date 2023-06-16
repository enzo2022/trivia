import React from 'react';
import "./Question.css"
function Question({question, options, onSelectAnswer, onBack }) {
  return (
    <div className='Question'>
      <h2 className='preguntas'>{question}</h2>
      <div >
        {options.map((option) => (
       <div className='respuestas'> <button id='respuesta'key={option} onClick={() => onSelectAnswer(option)}>  {option}</button>  
          </div>
         
        ))}
        
      </div>
      <button id='volver' onClick={onBack}>Volver a seleccionar tema</button>
    </div>
  );
}

export default Question;
