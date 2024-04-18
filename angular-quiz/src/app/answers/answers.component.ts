import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuizQuestion } from '../../quiz-question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.css',
})
export class AnswersComponent {
  constructor(private quizService: QuizService) {}
  @Input() answers: string[] = [];
  @Output() newItemEvent = new EventEmitter<string>();
  selectedAnswer: string = '';

  addNewItem(event: any) {
    this.newItemEvent.emit(this.selectedAnswer);
  }
}
