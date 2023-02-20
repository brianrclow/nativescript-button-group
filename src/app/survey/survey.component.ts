import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  selector: 'ns-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
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
