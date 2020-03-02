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

  // tihs is object that will send to API
 newSetting: { hashTags: string; gender: string; anotherWebSites: string[]; bio: string; location: string; dateOfBirth: null; id: number; privacyQuestion: boolean[]; userName: string };
  // end function



  ngOnInit() {
    this.onGetUserData('abdo@abdo.com');
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

  // to upgrade the setting
  onGetUpdateData() {
  this.newSetting = {
        id: this.userSetting.id,
        location: this.updateData.value.LOCATION,
        bio: this.updateData.value.BIO,
        anotherWebSites: [...this.userSetting.anotherWebSites ], // i do not know how get from html
        hashTags: this.updateData.value.HASHTAG,
        userName: this.userSetting.userName,
        dateOfBirth: this.updateData.value.DATE,
        gender: this.updateData.value.GENDER,
        privacyQuestion: [this.updateData.value.CHECK1, this.updateData.value.CHECK2, this.updateData.value.CHECK3, this.updateData.value.CHECK4]
    };
     // console.log(this.newSetting);
  this.settingServiceService.onUpdateSetting(this.newSetting ).subscribe(
       data => {
         // console.log(data);
       }
     );
  }
  // end function
}
