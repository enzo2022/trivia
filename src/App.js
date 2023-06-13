import React, { useState } from 'react';
import Question from './Question';

const triviaData = [
  {
    question: "¿Cuál de las siguientes bibliotecas o frameworks se utiliza para construir interfaces de usuario en React?",
    options: ["Angular", "Vue", "React", "Ember"],
    correctAnswer: "React"
  },
  {
    question: "¿Cuál es el ciclo de vida de un componente de React donde se deben realizar llamadas a una API o configurar suscripciones?",
    options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "componentWillUpdate"],
    correctAnswer: "componentDidMount"
  },
  {
    question: "¿Cuál es la función que se utiliza para renderizar un componente de React en el DOM?",
    options: ["renderComponent", "renderDOM", "renderElement", "ReactDOM.render"],
    correctAnswer: "ReactDOM.render"
  },
  {
    question: "¿Cuál es la forma correcta de pasar datos desde un componente padre a un componente hijo en React?",
    options: ["A través de props", "A través de state", "A través de context", "A través de Redux"],
    correctAnswer: "A través de props"
  },
  {
    question: "¿Cuál es el hook de React que se utiliza para manejar el estado en componentes funcionales?",
    options: ["useState", "useEffect", "useContext", "useMemo"],
    correctAnswer: "useState"
  },
  {
    question: "¿Cuál es la sintaxis correcta para importar un componente desde un archivo externo en React?",
    options: ["import { Componente } from './Archivo';", "import Componente from './Archivo';", "require('./Archivo');", "include Componente from './Archivo';"],
    correctAnswer: "import Componente from './Archivo';"
  },
  {
    question: "¿Cuál es la función que se utiliza para actualizar el estado en un componente de React?",
    options: ["setState", "updateState", "changeState", "modifyState"],
    correctAnswer: "setState"
  },
  {
    question: "¿Cuál es la herramienta que se utiliza para el enrutamiento en una aplicación de React?",
    options: ["React Router", "React Navigate", "React Route", "React Redirect"],
    correctAnswer: "React Router"
  },
  {
    question: "¿Cuál es la convención de nombres para los archivos de componentes en React?",
    options: ["CamelCase", "snake_case", "kebab-case", "PascalCase"],
    correctAnswer: "PascalCase"
  },
  {
    question: "¿Cuál es la forma recomendada de estilizar componentes en React?",
    options: ["CSS en línea", "CSS global", "CSS Modules", "Styled Components"],
    correctAnswer: "Styled Components"
  }
];


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    const currentAnswer = triviaData[currentQuestion].correctAnswer;
    if (selectedAnswer === currentAnswer) {
      setScore(score + 1);
    }

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < triviaData.length) {
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
  };

  return (
    <div>
      {gameOver ? (
        <div>
          <h2>¡Juego terminado! Puntaje final: {score}</h2>
          <h3>Respuestas:</h3>
          {triviaData.map((questionData, index) => (
            <div key={index}>
              <p>Pregunta: {questionData.question}</p>
              <p>Respuesta correcta: {questionData.correctAnswer}</p>
              <p>Tu respuesta: {selectedAnswers[index]}</p>
            </div>
          ))}
          <button onClick={handleRestart}>Reiniciar juego</button>
        </div>
      ) : (
        <Question
          question={triviaData[currentQuestion].question}
          options={triviaData[currentQuestion].options}
          onSelectAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
