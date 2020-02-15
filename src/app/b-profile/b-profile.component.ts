import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileServiceService} from './ProfileService/ProfileService.service';
import {UserInterface} from '../Z-ShareFiles/Interface/interfaceClass';

@Component({
  selector: 'app-b-profile',
  templateUrl: './b-profile.component.html',
  styleUrls: ['./b-profile.component.css']
})
export class BProfileComponent implements OnInit {

  // Follow button
  follow = true;

  // user profile data
  userData: UserInterface;

  constructor(private route: ActivatedRoute, private profileServiceService: ProfileServiceService) { }

  user = this.route.snapshot.queryParams.user;
  ngOnInit() {
    // console.log('the user is '+this.user);
    if (this.user === null || this.user === undefined) {
      this.onGetUserProfile(localStorage.getItem('THE_OWNER'));
    }
    this.onGetUserProfile(this.user);
  }

  // this function to follow
  onFollowUser() {
    if (this.follow === true) {
      this.follow = ! this.follow;
      this.userData.userProfile.followers ++;
    } else {
      this.follow = ! this.follow;
      this.userData.userProfile.followers --;
    }
  }


  // to block this user
  onBlockThisUser() {
      console.log(this.route.snapshot.queryParams.user);
  }

  // to get user profile data
  onGetUserProfile(email: string) {
      this.profileServiceService.GetProfileData(email).subscribe(
        data => {
          this.userData = data;
        }
      );
     // console.log('this is my email' + email);
  }

}
