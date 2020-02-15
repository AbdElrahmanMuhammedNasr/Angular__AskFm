import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-friend-stuff',
  templateUrl: './friend-stuff.component.html',
  styleUrls: ['./friend-stuff.component.css']
})
export class FriendStuffComponent implements OnInit {

  @ViewChild('askAnyOne', {static: false}) askAny: NgForm;

  constructor(private route: ActivatedRoute, private router: Router) { }

  // assume Best Friend
  bestFriend = [
    {
      account: 'abdo@abdo.com',
    },
    {
      account: 'Hassan@Hassan.com',
    },
    {
      account: 'samer',
    }, {
      account: 'Tamer',
    },
    {
      account: 'hassan',
    },
    {
      account: 'samer',
    }, {
      account: 'Tamer',
    },
    {
      account: 'hassan',
    },
    {
      account: 'samer',
    }, {
      account: 'Tamer',
    },
    {
      account: 'hassan',
    },
    {
      account: 'samer',
    },

  ]

  //  Best Friend


  ngOnInit() {
   // check if i in frienf page so disapper friends part
   //  console.log(this.route.parent);

  }

  onAskAnyMoreOneRandam() {
        console.log(this.askAny.value);
  }

  onAskOne(bestFriendAccont: string) {
    this.router.navigate(['/ask'], {queryParams: {account: bestFriendAccont}, fragment: 'onePerson'});
  }




}
