import { Component, OnInit } from '@angular/core';
import { AuthHttp, tokenNotExpired , JwtHelper} from 'angular2-jwt';
declare var Auth0Lock; //indicate to Typescrit hey man the Auth0Lock is availlable in the cd.auth0.com/js/lock-8.1.min.js!

@Component({
    moduleId: module.id,
    selector: 'auth0',
    template: `
    <h1>Welcome to Angular2 with Auth0</h1>
    <button *ngIf="!loggedIn()" (click)="login()">Login</button>
    <button *ngIf="loggedIn()" (click)="logout()">logout</button>
    `
})
export class Auth0Component implements OnInit {
    
    lock = new Auth0Lock('bUfoWb8hk8OsP9VUV2gpr7WlFE5LOWb9', 'antoinejaquet.eu.auth0.com');
    jwtHelper: JwtHelper=new JwtHelper();
    constructor() { }

    ngOnInit() { }
    
    login() {
       this.lock.show((err:string, profile:string, id_token:string)=>{
           if (err){
               throw new Error(err);
           }
           
           localStorage.setItem('profile', JSON.stringify(profile));
           localStorage.setItem('id_token', id_token);
           
           console.log(
               this.jwtHelper.decodeToken(id_token),
               this.jwtHelper.getTokenExpirationDate(id_token),
               this.jwtHelper.isTokenExpired(id_token)
           )
       });
    }
    
    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired();
    }

}