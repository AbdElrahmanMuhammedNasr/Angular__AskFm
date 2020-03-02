import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirendService} from './FriendsService/firendservice.service';
import {FriendsInterface} from '../Z-ShareFiles/Interface/interfaceClass';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  userFriends: FriendsInterface ;

  // used to filter data
  inputData: string;

  constructor(private router: Router, private friendService: FirendService) { }

  ngOnInit() {
    this.onGetAllFriends('abdo@abdo.com');
  }
  // to ask on friend
  onAskOneFriend(friendAccount: string) {
    this.router.navigate(['/ask'], { queryParams: {account: friendAccount}, fragment: 'onePerson'});
  }
  // end function

  // to get all friends
  onGetAllFriends(email: string) {
    this.friendService.getAllFriends(email).subscribe(
      friends => {
        this.userFriends = friends;
      }
    );
  }


}
