import {Injectable} from '@angular/core';
import {FirendService} from '../../friends/FriendsService/firendservice.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  // to get friends from friends services
  constructor(private friendsService: FirendService , private http: HttpClient) {}

  getAllFriends() {
    return this.friendsService.getAllFriends(localStorage.getItem('THE_OWNER'));
  }

  // ask
  askFriends(user: string , question: any) {
    return this.http.post(`http://localhost:8080/askUser/${user}`, question);
  }
}
