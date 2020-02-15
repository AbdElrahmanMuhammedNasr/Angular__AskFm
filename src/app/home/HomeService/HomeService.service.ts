import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AnswerQuestionInterface} from '../../Z-ShareFiles/Interface/interfaceClass';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

constructor(private http: HttpClient) {}

  GetPosts() {
    return this.http.get<AnswerQuestionInterface>('http://localhost:8080/getAllAnswerQuestion');
  }

}
