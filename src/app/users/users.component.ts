import { Component, OnInit } from '@angular/core';
import { AuthHttp, tokenNotExpired , JwtHelper} from 'angular2-jwt';
import {User} from '../../server/user';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    users: User[];
    
    constructor(private authHttp: AuthHttp) { }

    ngOnInit() { 
        this.getUsers();
    }
    
    getUsers(){
         this.authHttp.get('http://localhost:3000/api/users')
            .subscribe(
                data => {
                    console.log(data.json());
                  this.users=data.json();  
                },
                err =>console.log(err),
                () =>console.log('Complete')
            )
    }

}