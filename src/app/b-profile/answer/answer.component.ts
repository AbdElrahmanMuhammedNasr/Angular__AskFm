import { Component, OnInit } from '@angular/core';
import {AnswerQuestionInterface} from '../../Z-ShareFiles/Interface/interfaceClass';
import {AnswerServiceService} from './AnswerService/AnswerService.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answerQuestion: AnswerQuestionInterface;

  constructor(private answerServiceService: AnswerServiceService ) { }

  ngOnInit() {
      this.answerServiceService.onGetAnswerQuestion().subscribe(
          answerQuest => {
            this.answerQuestion = answerQuest;
            console.log(this.answerQuestion);
          }
      );
  }

}
