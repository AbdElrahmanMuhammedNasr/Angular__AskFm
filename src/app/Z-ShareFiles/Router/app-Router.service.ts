import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {BProfileComponent} from '../../b-profile/b-profile.component';
import {NgModule} from '@angular/core';
import {QuestionComponent} from '../../question/question.component';
import {AnswerQuestionComponent} from '../../question/answer-question/answer-question.component';
import {FriendsComponent} from '../../friends/friends.component';
import {AnswerComponent} from '../../b-profile/answer/answer.component';
import {GiftsComponent} from '../../b-profile/gifts/gifts.component';
import {LikesComponent} from '../../b-profile/likes/likes.component';
import {LoginAndSignupComponent} from '../../login-and-signup/login-and-signup.component';
import {SettingComponent} from '../../setting/setting.component';
import {ErrorPageComponent} from '../../error-page/error-page.component';
import {NotificationComponent} from '../../notification/notification.component';
import {AnswerNotificationComponent} from '../../notification/answer-notification/answer-notification.component';
import {LikesNotificationComponent} from '../../notification/likes-notification/likes-notification.component';
import {AskOneOrMoreComponent} from '../../ask-one-or-more/ask-one-or-more.component';
import {AuthGuard} from '../../Authontication/Auth_guard.service';


const appRoutes: Routes = [
  {path : '' , redirectTo: '/home', pathMatch: 'full'},
  {path : 'home' , component: HomeComponent},

  // canActivateChild : [AuthGuard],
  {path: 'profile',  component: BProfileComponent, children: [
      { path: 'answer', component: AnswerComponent},
      { path: 'gift', component: GiftsComponent},
      { path: 'likes', component: LikesComponent},
    ]},
  {path: 'question', component: QuestionComponent, children: [
      {path: 'answerQuestion', component: AnswerQuestionComponent},
    ]},

  {path: 'friends', canActivateChild : [AuthGuard], component: FriendsComponent},

  {path: 'login', component: LoginAndSignupComponent},

  {path: 'setting', canActivateChild : [AuthGuard], component: SettingComponent},

  {path: 'notification', canActivateChild : [AuthGuard], component: NotificationComponent, children: [
      {path: 'answer', component: AnswerNotificationComponent},
      {path: 'likes', component: LikesNotificationComponent},
    ]},

  {path: 'ask' , component: AskOneOrMoreComponent},

  {path: 'errorPage', component: ErrorPageComponent},
  {path: '**' , redirectTo: '/errorPage'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})

export  class AppRouterService {

}
