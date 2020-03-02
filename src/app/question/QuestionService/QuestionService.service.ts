import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {QuestionsInterface} from '../../Z-ShareFiles/Interface/interfaceClass';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }

  basicAuth() {
    const hearderAut = 'Basic ' + window.btoa('abdo@abdo.com' + ':' + '123A');
    return hearderAut;
  }



  GetAllQuestions(email: string) {
     // console.log('i am in service ' + email);
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });

    return this.http.get<QuestionsInterface>(`http://localhost:8080/getUserQuestion/${email}`,{headers: header});
  }

  GetNumberOfQuestionsPerUser(email: string) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });

    return this.http.get(`http://localhost:8080/getUserQuestionsNumber/${email}`,{headers: header});
  }

  DeleteAllQustions() {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });

    this.http.delete('http://localhost:8080/deleteApi/deleteAllUserQuestions', {headers: header});
  }


  DeleteOneQustion(indexQuestion: number) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });

    return this.http.delete(`http://localhost:8080/deleteApi/delete/${indexQuestion}` , {headers: header});
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
