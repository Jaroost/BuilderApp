import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

//Avoid name not found warning!
declare var Auth0Lock: any;

@Injectable()
export class AuthService{
    lock = new Auth0Lock('bUfoWb8hk8OsP9VUV2gpr7WlFE5LOWb9', 'antoinejaquet.eu.auth0.com', {});

    public login(){
        this.lock.show();
    }

    public authenticated(){
        return tokenNotExpired();
    }

    public logout(){
        localStorage.removeItem('id_token');
    }
}
