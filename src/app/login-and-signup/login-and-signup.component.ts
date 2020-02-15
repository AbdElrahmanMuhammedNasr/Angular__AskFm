import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginServiceService} from './LoginService/LoginService.service';

@Component({
  selector: 'app-login-and-signup',
  templateUrl: './login-and-signup.component.html',
  styleUrls: ['./login-and-signup.component.css']
})
export class LoginAndSignupComponent implements OnInit{


  @ViewChild('signUpFormData', {static: false}) signupData: NgForm;
  @ViewChild('loginFormData', {static: false}) loginData: NgForm;


  // to tell that is login
  isSignUP = false;

  // user valid or not
  userValid = true;

  // some inti vaule For Language
  Languages = ['arabic', 'english', 'france'];


    constructor(private router: Router, private loginServiceService: LoginServiceService) {
    }

    ngOnInit(): void {

    }

    //  login function
  onLoginForm() {
    localStorage.setItem('THE_OWNER', 'abdo@abdo.com');

    // if the email and password is correct redirect to home if not redirect to login again
    // this.loginServiceService.Login(this.loginData.value).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
      // if (this.loginServiceService.Login(this.loginData.value)) {
    this.router.navigate(['/home']);
      // } else {
      //   this.router.navigate(['/login']);
      //   this.userValid = false;
      //   this.loginData.reset();
      // }


      // console.log(this.loginData.value);
      // localStorage.setItem('LOGIN', 'TRUE');
  }
  // end function


  onSignUpForm() {
    console.log(this.signupData.value);

  }


}
