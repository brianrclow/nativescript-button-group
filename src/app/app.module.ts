import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './survey/question/question.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, SurveyComponent, QuestionComponent],

  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
