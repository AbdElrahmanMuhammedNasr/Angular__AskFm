import {Component, DoCheck, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AskService} from './AskService/askService.service';
import {FriendsInterface} from '../Z-ShareFiles/Interface/interfaceClass';

@Component({
  selector: 'app-ask-one-or-more',
  templateUrl: './ask-one-or-more.component.html',
  styleUrls: ['./ask-one-or-more.component.css']
})
export class AskOneOrMoreComponent implements OnInit {
  @ViewChild('askOneOrMoreForm', {static: false}) askOneOrMoreData: NgForm

  constructor(private route: ActivatedRoute, private askService: AskService) { }
  userFriends: FriendsInterface ;

  // to tell us if want to ask one friend or more = there is fragment
  fragmentTestMore = false ;

  // this is user you want to ask him
  userAccount: string;

  // these are users you want to asked
  usersAsked = '' ;
  counter = 0;

  // Filter data
  inputData = '';

  ngOnInit() {
    this.onGetAllUsers();
    this.onFragment();
    this.onGetUserAccountFromLink();
  }

  // function to get account user
  onGetUserAccountFromLink() {
    this.userAccount = this.route.snapshot.queryParams.account;
  }
  // end user Account function

  // test if there is fragment or not
  onFragment() {
    // console.log('fragment is ' + this.route.snapshot.fragment);
    if (this.route.snapshot.fragment === null || this.route.snapshot.fragment === undefined ) {
      this.fragmentTestMore = true;
    }
    this.route.fragment.subscribe(
      (frg) => {
        if (frg === null || frg === undefined ) {
          this.fragmentTestMore = true;
        }

      }
    );
  }
  // end fragment function

  // ask user or users
  onAskoneOrMore() {
      console.log(this.askOneOrMoreData.value);
      this.askOneOrMoreData.reset();
  }
  // end ask user

  // to select or then one user to ask
  onSelectUser(userAccount: string) {
      this.usersAsked = this.usersAsked +'  @' + userAccount;
      this.counter ++;
  }
  // end select

  onGetAllUsers() {
     this.askService.getAllFriends().subscribe(
       data => {
         this.userFriends = data;
         // console.log(this.userFriends)
       }
     );
  }

}
