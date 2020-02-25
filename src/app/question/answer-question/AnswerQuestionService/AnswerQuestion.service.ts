import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AnswerQuestionService {
  constructor(private http: HttpClient) {}

  AnswerQuestion(questionId: number, owner: string , answer: any) {
     return this.http.post(`http://localhost:8080/answerQuestion/${questionId}/${owner}`, answer);
  }

}
