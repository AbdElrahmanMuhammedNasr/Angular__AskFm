import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginServiceService {

  constructor(private http: HttpClient) {  }


  basicAuth() {
    const hearderAut = 'Basic ' + window.btoa('abdo@abdo.com' + ':' + '123A');
    return hearderAut;
  }

  Login(userInput: {EMAIL: undefined, PASSWORD: undefined}) {
   console.log(userInput);
   return  this.http.get(`http:localhost:8080/checkUser/${userInput.EMAIL}/${userInput.PASSWORD}` );
  }

  onSignUp(user: any) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return  this.http.post('http:localhost:8080/addUser', user , {headers: header} );

  }

}
