import React, { useState } from 'react';
import Question from './Question';
import { themes } from './themes';
import './App.css'




export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleAnswer = (selectedAnswer) => {
    const currentAnswer = selectedTheme.questions[currentQuestion].correctAnswer;
    if (selectedAnswer === currentAnswer) {
      setScore(score + 1);
    }

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedTheme.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setGameOver(false);
    setSelectedTheme(null);
  };

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setGameOver(false);
  };

  const renderThemeSelection = () => {
    return (
      <div className='selec'>
        <h2 className='seleccione'>Seleccione un tema:</h2>

        {themes.map((theme, index) => (
        <div id='button'>  <button className='button' key={index} onClick={() => handleThemeSelection(theme)}>
            {theme.name} </button> </div>

        ))}

      </div>
    );
  };

  const renderQuestion = () => {
    return (
      <div className='puntaje'>
        {gameOver ? (
          <div>
            <h2 id='puntaje'>¡Juego terminado! Puntaje final: {score}/10</h2>
            <h3 id='respuestass'>Respuestas:</h3>
            {selectedTheme.questions.map((questionData, index) => (
              <div className='general'  key={index}>
                <p  id='pregunta'>Pregunta: {questionData.question}</p>
                {questionData.correctAnswer !== selectedAnswers[index] && (
                  <p id='tu'>Tu respuesta: {selectedAnswers[index]}</p>
                )}
                <p id='correcta' className={questionData.correctAnswer === selectedAnswers[index] ? 'correct-answer' : 'incorrect-answer'}>
                  Respuesta correcta: {questionData.correctAnswer}
                </p>
              </div>
            ))}
            <button className='buttoncrear' onClick={handleRestart}>Reiniciar juego</button>
          </div>
        ) : (
          <Question
            question={selectedTheme.questions[currentQuestion].question}
            options={selectedTheme.questions[currentQuestion].options}
            onSelectAnswer={handleAnswer}
            onBack={handleRestart}
          />
        )}
      </div>
    );
  };

  return (
    <div>
      {selectedTheme ? renderQuestion() : renderThemeSelection()}
    </div>
  );
}
