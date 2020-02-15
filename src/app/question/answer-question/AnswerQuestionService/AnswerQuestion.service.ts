import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AnswerQuestionService {
  constructor(private http: HttpClient) {}

  AnswerQuestion(question: string, askerName: string, theAnswer: string, questionId: number, ownerEmail: string) {
      return this.http.get(`http://localhost:8080/answerQuestion/${question}/${askerName}/${questionId}/${ownerEmail}/${theAnswer}`);
  }

}
