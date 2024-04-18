import { Injectable } from '@angular/core';
import { QuizQuestion } from '../quiz-question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizData: QuizQuestion[];

  constructor() {
    this.quizData = [
      {
        question: '2 + 2 = 4?',
        type: 'trueFalse',
        answers: ['true', 'false'],
        correctAnswer: 'true',
      },
      {
        question:
          'How much money do you get for Passing GO in the board game Monopoly?',
        type: 'multipleChoice',
        answers: ['200', '0', '500', '600'],
        correctAnswer: '200',
      },
      {
        question: 'America is a free country?',
        type: 'trueFalse',
        answers: ['true', 'false'],
        correctAnswer: 'true',
      },
      {
        question: 'Where is Arkansas Tech University located?',
        type: 'multipleChoice',
        answers: ['Fayetteville', 'Little Rock', 'El Dorado', 'Russellville'],
        correctAnswer: 'Russellville',
      },
      {
        question: 'What year did the terrorist attacks of 9/11 happen?',
        type: 'multipleChoice',
        answers: ['1999', '2001', '1886', '1920'],
        correctAnswer: '2001',
      },
      {
        question: 'At what age is it legal to buy alcohol and tobacco products',
        type: 'multipleChoice',
        answers: ['16', '18', '20', '21'],
        correctAnswer: '21',
      },
      {
        question: 'Who sang the hit song "Higher"',
        type: 'multipleChoice',
        answers: ['Creed', 'Journey', 'Shinedown', '3 Doors Down'],
        correctAnswer: 'Creed',
      },
      {
        question: 'The Corvette was first put into production in 1953',
        type: 'trueFalse',
        answers: ['true', 'false'],
        correctAnswer: 'true',
      },
      {
        question: '9 * 9 = 81?',
        type: 'trueFalse',
        answers: ['true', 'false'],
        correctAnswer: 'true',
      },
      {
        question: 'What kind of engine is in the new 2023 C8 Corvette Z06',
        type: 'multipleChoice',
        answers: [
          '3.6L VVT ',
          '5.7L Hemi',
          '5.7L LT6',
          '6.2 L LT4 supercharged V8',
        ],
        correctAnswer: '5.7L LT6',
      },
    ];
  }

  getQuestions() {
    return this.quizData;
  }

  getAnswers() {
    return this.quizData;
  }

  getCorrectAnswer() {
    return this.quizData;
  }
}
