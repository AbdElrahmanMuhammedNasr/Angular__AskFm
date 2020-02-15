import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {QuestionsInterface} from '../../Z-ShareFiles/Interface/interfaceClass';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }

  GetAllQuestions(email: string) {
     // console.log('i am in service ' + email);
     return this.http.get<QuestionsInterface>(`http://localhost:8080/getUserQuestion/${email}`);
  }

  GetNumberOfQuestionsPerUser(email: string) {
    return this.http.get(`http://localhost:8080/getUserQuestionsNumber/${email}`);
  }

  DeleteAllQustions() {
    this.http.delete('http://localhost:8080/deleteAllUserQuestions');
  }

  DeleteOneQustion(indexQuestion: number) {
    console.log(indexQuestion);
    return this.http.delete(`http://localhost:8080/delete/${indexQuestion}`);
  }
  GetRandomQuestions() {
    // this.Userquestions.push({
    //   question: 'I am random Question',
    //   asker: 'Askfm zat nafso',
    //   time : 0
    // });
  }

}

/**************************************************************************************/
