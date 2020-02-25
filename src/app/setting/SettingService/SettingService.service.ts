import {HttpClient} from '@angular/common/http';
import {SettingInterface, UserInterface} from '../../Z-ShareFiles/Interface/interfaceClass';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingServiceService {


 constructor(private http: HttpClient) {}

  onGetOldSetting(email: string) {
    return this.http.get<SettingInterface>(`http://localhost:8080/getUserSetting/${email}`);
  }

  onUpdateSetting(newSetting: any ) {
    return this.http.put('http://localhost:8080/updateSetting', newSetting );
  }

}
