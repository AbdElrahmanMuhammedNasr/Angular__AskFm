import { Component, OnInit } from '@angular/core';
import {HomeServiceService} from './HomeService/HomeService.service';
import {AnswerQuestionInterface} from '../Z-ShareFiles/Interface/interfaceClass';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Posts: AnswerQuestionInterface ;

  constructor(private homeService: HomeServiceService) { }

  ngOnInit() {
    this.homeService.GetPosts().subscribe(
      post => {
         this.Posts = post;
         console.log(post);
         console.log(this.Posts);
      }
    );
  }

}
