import {Time} from '@angular/common';

export interface QuestionsInterface {
  id: number;
  question: string;
  email: string;
  time: Time;
  user: UserInterface;

}

export interface AnswerQuestionInterface  {
  id: number;
  email: string; //  the asker email
  answer: string;
  question: string;
  date: Date;
  user: UserInterface;

}

export interface FriendsInterface {
    id: number;
    email: string;
    user: UserInterface;
}

export interface UserInterface {
  id: number;
  email: string;
  fullName: string;
  userSetting: SettingInterface;
  userProfile: ProfileInterface;


}
export interface SettingInterface {
  id: number;
  location: string;
  bio: string;
  anotherWebSites: string [] ;
  hashTags: string;
  userName: string;
  dateOfBirth: Date;
  gender: string;
  privacyQuestion: boolean [];

}

export interface ProfileInterface {
  followers: number;
  active: boolean;
}
