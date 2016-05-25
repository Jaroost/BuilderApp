import { Component, OnInit } from '@angular/core';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired} from 'angular2-jwt';
@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html'
})
@CanActivate(()=>tokenNotExpired())
export class ProfileComponent implements OnInit {
    profile: any;
    
    constructor() {
        this.profile=JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
     }

    ngOnInit() { }

}