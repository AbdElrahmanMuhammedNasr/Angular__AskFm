import {UserInterface} from '../../Z-ShareFiles/Interface/interfaceClass';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http: HttpClient) {}

  GetProfileData(email: string ) {

    // console.log('i am in service ' + email);

    return this.http.get<UserInterface>(`http://localhost:8080/getOneUser/${email}`);

      // return this.userprofile;
  }

}
