import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AnswerQuestionService} from './AnswerQuestionService/AnswerQuestion.service';

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {
  @ViewChild('answerQuestionForm', {static: false}) answerQuestionData: NgForm;

  constructor(private route: ActivatedRoute, private router: Router, private  answerQuestionService: AnswerQuestionService) { }
  // this data about asker
  askerName: string;
  askerQuestion: string;
  questionId: number;

  ngOnInit() {
    this.onGetAskerData();
  }

  // to get asker data name and question
  onGetAskerData() {
    this.askerName = this.route.snapshot.queryParams.asker;
    this.askerQuestion = this.route.snapshot.queryParams.question;
    this.questionId  = this.route.snapshot.queryParams.questionId;

    console.log('the questions dats ' + this.askerName , this.askerQuestion , this.questionId);

  }
  // end function

  onAnswerQuestion() {
    this.answerQuestionService.AnswerQuestion(this.askerQuestion, this.askerName, this.answerQuestionData.value.ANSWER_QUESTION, this.questionId, localStorage.getItem('THE_OWNER'));
    this.answerQuestionData.reset();
    this.onNotAnswer();
    // console.log(this.answerQuestionData.value);
  }

  // i do not want to answer
  onNotAnswer() {
    this.router.navigate(['/question']);
  }

}
