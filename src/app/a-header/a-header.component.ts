import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.css']
})
export class AHeaderComponent implements OnInit {

  // there is user Open
  THE_USER = localStorage.getItem('THE-USER-EMAIL') ;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('the user ' + this.THE_USER);
  }



  onLogin() {
    this.router.navigate(['/login']);
  }
  onLogout() {
    // logout user
  }

}
