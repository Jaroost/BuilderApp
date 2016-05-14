
import {FIRST_NAMES, LAST_NAMES} from './names';
import * as _ from 'lodash';

export class User {
    id:number;
    first_name:string;
    last_name:string;
    
    constructor(id: number, first_name:string, last_name:string) {
        this.id=id;
        this.first_name=first_name;
        this.last_name=last_name;
    }
    
    static RandomUsers(count:number): User[]{
        let users:User[]=[];
	    for(let i=0;i<count; i++){
            users.push(new User(i, _.sample(FIRST_NAMES), _.sample(LAST_NAMES)));
        }
        return users;
    }
    
    tostring(){
        return `${this.first_name} ${this.last_name} (${this.id})`;
    }
}