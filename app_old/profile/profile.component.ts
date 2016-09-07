import { Component, OnInit } from '@angular/core';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired, AuthHttp} from 'angular2-jwt';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html'
})
@CanActivate(()=>tokenNotExpired())
export class ProfileComponent implements OnInit {
    profile: any;
    quote:string;
    
    constructor(private authHttp:AuthHttp) {
        this.profile=JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
        this.getQuote();
     }
     
     getQuote(){
        this.authHttp.get('http://localhost:3000/api/hello')
            .subscribe(
                data => {
                    console.log(data.json());
                  this.quote=data.json();  
                },
                err =>console.log(err),
                () =>console.log('Complete')
            )
     }

    ngOnInit() { }

}