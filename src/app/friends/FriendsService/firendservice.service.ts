import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FriendsInterface} from '../../Z-ShareFiles/Interface/interfaceClass';

@Injectable({
  providedIn: 'root'
})
export class FirendService {
constructor(private http: HttpClient) {}
  basicAuth() {
    const hearderAut = 'Basic ' + window.btoa('abdo@abdo.com' + ':' + '123A');
    return hearderAut;
  }

  getAllFriends(email: string) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
      return this.http.get<FriendsInterface>(`http://localhost:8080/getUserFriends/${email}`,{headers: header});
    }

}
