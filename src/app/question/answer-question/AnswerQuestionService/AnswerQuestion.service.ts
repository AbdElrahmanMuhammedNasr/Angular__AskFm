import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AnswerQuestionService {
  constructor(private http: HttpClient) {}
  basicAuth() {
    const hearderAut = 'Basic ' + window.btoa('abdo@abdo.com' + ':' + '123A');
    return hearderAut;
  }

  AnswerQuestion(questionId: number, owner: string , answer: any) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.post(`http://localhost:8080/answerQuestion/${questionId}/${owner}`, answer, {headers: header});
  }

}
