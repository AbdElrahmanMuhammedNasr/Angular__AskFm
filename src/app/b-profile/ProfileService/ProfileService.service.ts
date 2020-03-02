import {UserInterface} from '../../Z-ShareFiles/Interface/interfaceClass';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http: HttpClient) {}

  basicAuth() {
    const hearderAut = 'Basic ' + window.btoa('abdo@abdo.com' + ':' + '123A');
    return hearderAut;
  }

  GetProfileData(email: string ) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.get<UserInterface>(`http://localhost:8080/getOneUser/${email}`, {headers: header});

      // return this.userprofile;
  }

}
