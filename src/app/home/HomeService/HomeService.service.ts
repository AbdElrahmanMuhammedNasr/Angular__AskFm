import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AnswerQuestionInterface} from '../../Z-ShareFiles/Interface/interfaceClass';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

constructor(private http: HttpClient) {}

  basic() {
    const header = 'Basic ' + window.btoa('abdo@abdo.com' + ':' + '123A');
    return header;
  }

  GetPosts() {
    const header = new HttpHeaders({
      Authorization: this.basic()
    });
    return this.http.get<AnswerQuestionInterface>('http://localhost:8080/getAllAnswerQuestion', {headers: header});
  }

}
