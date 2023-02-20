import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  selector: 'ns-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  survey: Array<Question>;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.survey = this.questionService.getQuestions();
  }
}
