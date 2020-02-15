import {Injectable} from '@angular/core';

@Injectable()
export  class AuthService {
  isAuthtication() {
      const promise = new Promise( ((resolve, reject) => {
        resolve(this.isLogin());
      } )
      );
      return promise;
  }

  isLogin() {
    if ( localStorage.getItem('THE_OWNER') != null ) {
      return false;
    }
  }

}
