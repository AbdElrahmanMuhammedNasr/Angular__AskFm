import {Injectable} from '@angular/core';
import {FirendService} from '../../friends/FriendsService/firendservice.service';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  // to get friends from friends services
  constructor(private friendsService: FirendService) {}

  getAllFriends() {
    return this.friendsService.getAllFriends(localStorage.getItem('THE_OWNER'));
  }

}
