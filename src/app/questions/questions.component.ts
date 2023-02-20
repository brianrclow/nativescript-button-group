import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  selector: 'ns-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions: Array<Question>;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }

  selectAnswer(args, answer: string) {
    var btn = args.object;
    if (answer === 'yes') {
      btn.backgroundColor = 'green';
    } else {
      btn.backgroundColor = 'red';
    }
  }
}
