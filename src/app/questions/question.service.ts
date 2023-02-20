import { Injectable } from '@angular/core';

import { Question } from './question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questions = new Array<Question>(
    { id: 0, title: 'Question 0' },
    { id: 1, title: 'Question 1' },
    { id: 2, title: 'Question 2' },
    { id: 3, title: 'Question 3' },
    { id: 4, title: 'Question 4' },
    { id: 5, title: 'Question 5' },
    { id: 6, title: 'Question 6' }
  );

  getQuestions(): Array<Question> {
    return this.questions;
  }
}
