import {User} from './user';

export class UserContainer {
    users: User[];
    
    constructor(count:number) {
        this.users=User.RandomUsers(count);
    }
    
    getUsers(start:number, stop:number){
        
    }
}