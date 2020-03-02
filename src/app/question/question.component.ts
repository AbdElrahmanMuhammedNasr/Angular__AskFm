import { Component, OnInit } from '@angular/core';
import {QuestionServiceService} from './QuestionService/QuestionService.service';
import {Router} from '@angular/router';
import {QuestionsInterface} from '../Z-ShareFiles/Interface/interfaceClass';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService: QuestionServiceService ) { }

   UserQuestions: QuestionsInterface ;

  // this is number of Question
  numberOfQuestions;

  // assume email
  // email = localStorage.getItem('THE_OWNER');


  ngOnInit() {
     this.onGetAllQuestion();
  }

  // get all  user questions
  onGetAllQuestion() {
    this.questionService.GetAllQuestions('abdo@abdo.com').subscribe(
      data => {
        this.UserQuestions = data;
        // console.log(this.UserQuestions[0]);
      }
    );

    // to get the number of questions
    this.questionService.GetNumberOfQuestionsPerUser('abdo@abdo.com').subscribe(
      num => {
        this.numberOfQuestions = num;
        // console.log(typeof  this.numberOfQuestions);
      }
    );

  }
  // end

  // to delete all questions
  onDeleteAllQustions() {
    this.questionService.DeleteAllQustions();
    this.onGetAllQuestion();
  }
  // end


  onGetRandomQuestions() {
    this.questionService.GetRandomQuestions();
    // this.numberOfQuestions = this.Questions.length;
    // console.log('get One');
  }

  onDeleteOneQustion(indexQuestion: number) {
    // console.log( indexQuestion);
     this.questionService.DeleteOneQustion(indexQuestion).subscribe(
       result => {
         this.onGetAllQuestion();
       } , error => {
         console.log(error.error.error);
       }
     );
  }



}
