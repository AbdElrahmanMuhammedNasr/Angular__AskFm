import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AnswerQuestionInterface} from '../../../Z-ShareFiles/Interface/interfaceClass';

@Injectable({
  providedIn: 'root'
})
export class AnswerServiceService {
  constructor(private http: HttpClient) {}

    onGetAnswerQuestion() {
    return this.http.get<AnswerQuestionInterface>('http://localhost:8080/getAllUSERAnswerQuestion');
    }
}
