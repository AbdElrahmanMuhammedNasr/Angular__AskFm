import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginServiceService {

  constructor(private http: HttpClient) {  }
  //
  // user = {
  //   email: 'abdo@abdo.com',
  //   password: '123A',
  // }
  //
  // onLogin(userInput: {EMAIL: undefined, PASSWORD: undefined}) {
  //     if (this.user.email === userInput.EMAIL && this.user.password === userInput.PASSWORD ) {
  //       return true;
  //       localStorage.setItem('THE-USER-EMAIL', this.user.email);
  //     } else {
  //       return false;
  //     }
  // }

  Login(userInput: {EMAIL: undefined, PASSWORD: undefined}) {
   return  this.http.get(`http:localhost:8080/checkUser/${userInput.EMAIL}/${userInput.PASSWORD}` );

  }
  onSignUp(user: any) {
    return  this.http.post('http:localhost:8080/addUser', user );

  }

}
