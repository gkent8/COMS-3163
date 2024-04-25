"use client";
import { setServers } from "dns";
import React, { useState } from "react";

export default function Quiz() {
  const questionData = [
    {
      question: "2 + 2 = 4?",
      type: "trueFalse",
      answers: ["true", "false"],
      correctAnswer: "true",
    },
    {
      question:
        "How much money do you get for Passing GO in the board game Monopoly?",
      type: "multipleChoice",
      answers: ["200", "0", "500", "600"],
      correctAnswer: "200",
    },
    {
      question: "America is a free country?",
      type: "trueFalse",
      answers: ["true", "false"],
      correctAnswer: "true",
    },
    {
      question: "Where is Arkansas Tech University located?",
      type: "multipleChoice",
      answers: ["Fayetteville", "Little Rock", "El Dorado", "Russellville"],
      correctAnswer: "Russellville",
    },
    {
      question: "What year did the terrorist attacks of 9/11 happen?",
      type: "multipleChoice",
      answers: ["1999", "2001", "1886", "1920"],
      correctAnswer: "2001",
    },
    {
      question: "At what age is it legal to buy alcohol and tobacco products",
      type: "multipleChoice",
      answers: ["16", "18", "20", "21"],
      correctAnswer: "21",
    },
    {
      question: 'Who sang the hit song "Higher"',
      type: "multipleChoice",
      answers: ["Creed", "Journey", "Shinedown", "3 Doors Down"],
      correctAnswer: "Creed",
    },
    {
      question: "The Corvette was first put into production in 1953",
      type: "trueFalse",
      answers: ["true", "false"],
      correctAnswer: "true",
    },
    {
      question: "9 * 9 = 81?",
      type: "trueFalse",
      answers: ["true", "false"],
      correctAnswer: "true",
    },
    {
      question: "What kind of engine is in the new 2023 C8 Corvette Z06",
      type: "multipleChoice",
      answers: [
        "3.6L VVT ",
        "5.7L Hemi",
        "5.7L LT6",
        "6.2 L LT4 supercharged V8",
      ],
      correctAnswer: "5.7L LT6",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [displayResults, setDisplayResults] = useState(false);

  const handleAnswerSelection = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (isCorrect(selectedAnswer)) {
      setScore(score + 1);
    }
    
    if(currentQuestion + 1 === questionData.length){
        setDisplayResults(true);
    }
    else{
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    }
  };

  const isCorrect = (answer) => {
    return answer === questionData[currentQuestion].correctAnswer;
  };

  if (displayResults) {
    return <Results score={score} totalQuestions={questionData.length} />;
  }

  return (
    <div className="quiz-container">
      <h1> React Quiz App </h1>
        <div className="question">
        <Questions
          questionData={questionData}
          currentQuestion={currentQuestion}
        />
        <Answers
          answers={questionData[currentQuestion].answers}
          selectedAnswer={selectedAnswer}
          handleAnswerSelection={handleAnswerSelection}
        />
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
    </div>
  );
}

function Questions({ questionData, currentQuestion }) {
  return (
    <div>
      <h3>Question {currentQuestion + 1}</h3>
      {questionData[currentQuestion].question}
    </div>
  );

}

function Answers({ answers, selectedAnswer, handleAnswerSelection }) {
  return (
    <div>
      {answers.map((answer, index) => (
        <label key={index}>
          <input
            type="radio"
            value={answer}
            checked={selectedAnswer === answer}
            onChange={handleAnswerSelection}
          />
          {answer} <br></br>
        </label>
      ))}
    </div>
  );
}

function Results({ score, totalQuestions }) {
  return (
    <div className="results">
      <h3>Quiz Results</h3>
      <p>
        {" "}
        You scored a {score} out of {totalQuestions}!{" "}
      </p>
    </div>
  );
}
