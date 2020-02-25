import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginServiceService} from './LoginService/LoginService.service';

@Component({
  selector: 'app-login-and-signup',
  templateUrl: './login-and-signup.component.html',
  styleUrls: ['./login-and-signup.component.css']
})
export class LoginAndSignupComponent implements OnInit {
  user: { userSetting: { hashTags: string; gender: any; anotherWebSites: null; bio: string; location: string; dateOfBirth: any; privacyQuestion: null; userName: any }; fullName: any; email: any };

    constructor(private router: Router, private loginServiceService: LoginServiceService) {}

  @ViewChild('signUpFormData', {static: false}) signupData: NgForm;
  @ViewChild('loginFormData', {static: false}) loginData: NgForm;


  // to tell that is login
  isSignUP = false;

  // user valid or not
  userValid = true;

  // some inti vaule For Language
  Languages = ['arabic', 'english', 'france'];
  // end function

    ngOnInit(): void {}

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
  onSignUpForm() {
    // console.log(this.signupData.value);
    this.user = {
      email: this.signupData.value.EMAIL,
      fullName: this.signupData.value.FULLNAME,
      userSetting: {
        location: '',
        bio: '',
        anotherWebSites: null,
        hashTags: '',
        userName: this.signupData.value.USERNAME,
        dateOfBirth: this.signupData.value.DATE,
        gender: this.signupData.value.GENDER,
        privacyQuestion: null
      },
    };
    console.log(this.user);
    this.loginServiceService.onSignUp(this.user).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error );
        console.log(error.url);
      }
    );
  }


}
