import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SettingServiceService} from './SettingService/SettingService.service';
import {SettingInterface, UserInterface} from '../Z-ShareFiles/Interface/interfaceClass';
import {ProfileServiceService} from '../b-profile/ProfileService/ProfileService.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private settingServiceService: SettingServiceService) { }

 //  this user setting
  userSetting: SettingInterface;



  @ViewChild('updateDataForm', { static: false}) updateData: NgForm;


  // some inti vaule For CheckBox
  Checks = [{
      What: 'Allow anonymous questions',
      name: 'CHECK1'
    },

    {
      What: 'Allow other users to share my posts',
      name: 'CHECK2'
    },

    {
      What: 'Allow showing my answers on Discover feed',
      name: 'CHECK3'
    },

    {
      What: 'Show Status',
      name: 'CHECK4'
    },
  ];
  // end function



  ngOnInit() {
    this.onGetUserData(localStorage.getItem('THE_OWNER'));
   // this.onSetInitValue();
  }


  // to get all user setting
  onGetUserData(email: string) {
    this.settingServiceService.onGetOldSetting(email).subscribe(
     oldSetting => {
       this.userSetting = oldSetting;
       console.log(this.userSetting);
     }
   );

  }

  // to upgrade Setting  data
  // newSetting : {
  //   idD: number,
  //   location: string,
  //   bio: string,
  //   anotherWebSites: string [] ,
  //   hashTags: string,
  //   userName: string,
  //   dateOfBirth: string,
  //   gender: string,
  //   privacyQuestion: boolean [],
  // //
  // }
  onGetUpdateData() {
    // console.log(this.updateData.value);
    // this.newSetting.idD = 1
    //  this.newSetting.location = this.updateData.value.LOCATION;
    // this.newSetting.bio = this.updateData.value.BIO;
    // this.newSetting.anotherWebSites = this.updateData.value.LOCATION;
    // this.newSetting.hashTags = this.updateData.value.HASHTAG;
    // this.newSetting.userName = this.userSetting.userName;
    // this.newSetting.dateOfBirth = this.updateData.value.DATE;
    // this.newSetting.gender = this.updateData.value.GENDER;
    // this.newSetting.privacyQuestion = this.updateData.value.LOCATION;
    //
    //  console.log(this.newSetting);

    this.settingServiceService.onUpdateSetting(this.updateData.value );
  }
  // end function
}
