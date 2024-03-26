const questions = [
  {
    question: '2 + 2 = 4?',
    type: 'trueFalse',
    answers: ['true', 'false'],
    correctAnswer: ['true'],
  },
  {
    question: 'How much money do you get for Passing GO in the board game Monopoly?',
    type: 'multipleChoice',
    answers: ['200', '0', '500', '600'],
    correctAnswer: ['200'],
  },
  {
    question: 'America is a free country?',
    type: 'trueFalse',
    answers: ['true', 'false'],
    correctAnswer: ['true'],
  },
  {
    question: 'Where is Arkansas Tech University located?',
    type: 'multipleChoice',
    answers: ['Fayetteville', 'Little Rock', 'El Dorado', 'Russellville'],
    correctAnswer: ['Russellville'],
  },
  {
    question: 'What year did the terrorist attacks of 9/11 happen?',
    type: 'multipleChoice',
    answers: ['1999', '2001', '1886', '1920'],
    correctAnswer: ['2001'],
  },
  {
    question: 'At what age is it legal to buy alcohol and tobacco products',
    type: 'multipleChoice',
    answers: ['16', '18', '20', '21'],
    correctAnswer: ['21'],
  },
  {
    question: 'Who sang the hit song "Higher"',
    type: 'multipleChoice',
    answers: ['Creed', 'Journey', 'Shinedown', '3 Doors Down'],
    correctAnswer: ['Creed'],
  },
  {
    question: 'The Corvette was first put into production in 1953',
    type: 'trueFalse',
    answers: ['true', 'false'],
    correctAnswer: ['true'],
  },
  {
    question: '9 * 9 = 81?',
    type: 'trueFalse',
    answers: ['true', 'false'],
    correctAnswer: ['true'],
  },
  {
    question: 'What kind of engine is in the new 2023 C8 Corvette Z06',
    type: 'multipleChoice',
    answers: ['3.6L VVT ', '5.7L Hemi', '5.7L LT6', '6.2 L LT4 supercharged V8'],
    correctAnswer: ['5.7L LT6'],
  },
];

const startButton = document.getElementById('startBtn');
const NextQuestionEl = document.getElementById('nextBtn');

let currentQuestion;
let score = 0;

function displayResults(finalScore) {
  NextQuestionEl.classList.add('hide');
  document.getElementById('quiz').innerHTML = '';
  console.log('displayResults - score: ', finalScore);
  const results = document.getElementById('Quiz-results');

  results.innerHTML = `<div class="results">
  <h2> Quiz Results </h2>
    <p> You got ${finalScore} out of 10 questions correct!!</p>`;
}

function displayQuestion(QuestionIndex) {
  if (currentQuestion === questions.length) {
    displayResults(score);
    return;
  }
  const quiz = document.getElementById('quiz');
  const option = questions[QuestionIndex].answers;
  switch (questions[currentQuestion].type) {
    case 'trueFalse':
      quiz.innerHTML = `<div class="question">
      <h3>Question ${QuestionIndex + 1}</h3>
        <p>${questions[QuestionIndex].question}</p>
        <form id='answers'>
        <input type="radio" id="option1" name="question" value="true" />
        <label for="option1">True</label><br />
        <input type="radio" id="option2" name="question" value="false" />
        <label for="option2">False</label><br />
        </form>`;
      break;
    case 'multipleChoice':
      quiz.innerHTML = `<div class="question">
      <h3>Question ${QuestionIndex + 1}</h3>
        <p>${questions[QuestionIndex].question}</p>
        <form id='answers'>
        <input type="radio" id="option1" name="question" value="${option[0]}"/>
        <label for="option1">${option[0]}</label><br/>
        <input type="radio" id="option2" name="question" value="${option[1]}"/>
        <label for="option2">${option[1]}</label><br />
        <input type="radio" id="option3" name="question" value="${option[2]}" />
        <label for="option3">${option[2]}</label><br />
        <input type="radio" id="option4" name="question" value="${option[3]}"/>
        <label for="option4">${option[3]}</label><br />
        </form>`;
      break;
    default:
  }
}

function startQuiz() {
  console.log('quiz started');
  // let score = 0;
  currentQuestion = 0;
  startButton.classList.add('hide');
  displayQuestion(currentQuestion);
}
function isCorrectAnswer(choice, correctAnswer) {
  if (choice == correctAnswer) {
    score += 1;
  }
  return score;
}

function NextQuestion(e) {
  const form = document.getElementById('answers');
  const data = new FormData(form);
  for (const [name, value] of data) {
    console.log(name, ':', value);
  }

  const choice = document.querySelector('input[name="question"]:checked').value;
  console.log(choice);
  isCorrectAnswer(choice, questions[currentQuestion].correctAnswer);
  currentQuestion += 1;
  console.log(score);
  displayQuestion(currentQuestion);
}

startButton.addEventListener('click', startQuiz);
NextQuestionEl.addEventListener('click', NextQuestion);
