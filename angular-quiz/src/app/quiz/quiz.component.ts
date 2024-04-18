import { Component, input } from '@angular/core';
import { QuizQuestion } from '../../quiz-question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  score = 0;
  currentQuestion = 0;
  questions: QuizQuestion[] = [];
  answers: QuizQuestion[] = [];
  correctAnswer: QuizQuestion[] = [];
  selectedOption: string = '';
  quizCompleted: boolean = false;
  isStarted: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
    console.log(this.questions);

    this.answers = this.quizService.getAnswers();
    console.log(this.answers);

    this.correctAnswer = this.quizService.getCorrectAnswer();
    console.log(this.correctAnswer);
  }

  startQuiz() {
    this.isStarted = true;
    console.log('quiz started');
  }

  nextQuestion() {
    this.isCorrect();
    if (!this.isComplete()) {
      this.currentQuestion += 1;
    }
  }

  restartQuiz(){
    this.currentQuestion = 0;
    this.score = 0;
    this.startQuiz();
  }

  isComplete() {
    return this.currentQuestion === this.questions.length;
  }

  isCorrect() {
    if (this.correctAnswer[this.currentQuestion].correctAnswer === this.selectedOption) {
      this.score++;
    }
    console.log('selectedOption:', this.selectedOption);
    console.log('score', this.score);
  }

    onSelectedAnswerChange(value: string) {
    console.log('Selected answer:', value);
    this.selectedOption = value;
    }
}
