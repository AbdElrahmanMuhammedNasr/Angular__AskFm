import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SettingInterface, UserInterface} from '../../Z-ShareFiles/Interface/interfaceClass';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingServiceService {

  basicAuth() {
    const hearderAut = 'Basic ' + window.btoa('abdo@abdo.com' + ':' + '123A');
    return hearderAut;
  }


 constructor(private http: HttpClient) {}

  onGetOldSetting(email: string) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });

    return this.http.get<SettingInterface>(`http://localhost:8080/getUserSetting/${email}`, {headers: header});
  }

  onUpdateSetting(newSetting: any ) {
    const header = new HttpHeaders({
      Authorization: this.basicAuth()
    });
    return this.http.put('http://localhost:8080/updateSetting', newSetting , {headers: header});
  }

}
