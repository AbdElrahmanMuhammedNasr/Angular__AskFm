import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FriendsInterface} from '../../Z-ShareFiles/Interface/interfaceClass';

@Injectable({
  providedIn: 'root'
})
export class FirendService {
constructor(private http: HttpClient) {}
  getAllFriends(email: string) {
      return this.http.get<FriendsInterface>(`http://localhost:8080/getUserFriends/${email}`);
    }

}
