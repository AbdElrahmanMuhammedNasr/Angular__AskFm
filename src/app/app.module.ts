import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AHeaderComponent } from './a-header/a-header.component';
import { BProfileComponent } from './b-profile/b-profile.component';
import { AnswerComponent } from './b-profile/answer/answer.component';
import { LikesComponent } from './b-profile/likes/likes.component';
import { GiftsComponent } from './b-profile/gifts/gifts.component';
import { HomeComponent } from './home/home.component';
import {AppRouterService} from './Z-ShareFiles/Router/app-Router.service';
import { QuestionComponent } from './question/question.component';
import {FriendStuffComponent} from './Z-ShareFiles/Component/friend-stuff/friend-stuff.component';
import { AnswerQuestionComponent } from './question/answer-question/answer-question.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginAndSignupComponent } from './login-and-signup/login-and-signup.component';
import { SettingComponent } from './setting/setting.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {FirendService} from './friends/FriendsService/firendservice.service';
import {HomeServiceService} from './home/HomeService/HomeService.service';
import {LoginServiceService} from './login-and-signup/LoginService/LoginService.service';
import {QuestionServiceService} from './question/QuestionService/QuestionService.service';
import {AnswerQuestionService} from './question/answer-question/AnswerQuestionService/AnswerQuestion.service';
import {SettingServiceService} from './setting/SettingService/SettingService.service';
import {FriendStuffServiceService} from './Z-ShareFiles/Component/friend-stuff/FriendStuffService/FriendStuffService.service';
import {ProfileServiceService} from './b-profile/ProfileService/ProfileService.service';
import {AnswerServiceService} from './b-profile/answer/AnswerService/AnswerService.service';
import {LikesServiceService} from './b-profile/likes/LikesService/LikesService.service';
import {GiftsServiceService} from './b-profile/gifts/GiftsService/GiftsService.service';
import { NotificationComponent } from './notification/notification.component';
import { LikesNotificationComponent } from './notification/likes-notification/likes-notification.component';
import { AnswerNotificationComponent } from './notification/answer-notification/answer-notification.component';
import { AskOneOrMoreComponent } from './ask-one-or-more/ask-one-or-more.component';
import {FilterPipe} from './Z-ShareFiles/Pipe/filter.pipe';
import {AskService} from './ask-one-or-more/AskService/askService.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './Authontication/Auth.service';
import {AuthGuard} from './Authontication/Auth_guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AHeaderComponent,
    BProfileComponent,
    AnswerComponent,
    LikesComponent,
    GiftsComponent,
    HomeComponent,
    QuestionComponent,
    FriendStuffComponent,
    AnswerQuestionComponent,
    FriendsComponent,
    LoginAndSignupComponent,
    SettingComponent,
    ErrorPageComponent,
    NotificationComponent,
    LikesNotificationComponent,
    AnswerNotificationComponent,
    AskOneOrMoreComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterService,
    HttpClientModule,
  ],
  providers: [
               FirendService, HomeServiceService, LoginServiceService, QuestionServiceService,
               AnswerQuestionService, SettingServiceService, FriendStuffServiceService, ProfileServiceService,
               AnswerServiceService, LikesServiceService, GiftsServiceService, AskService, AuthService, AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
