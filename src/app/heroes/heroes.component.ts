import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {MATERIAL_DIRECTIVES} from 'ng2-material';

@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    directives: [MATERIAL_DIRECTIVES],
    styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroesList:Hero[];
    constructor() { }

    ngOnInit() {
        this.heroesList=[new Hero(1, 'Antoine', 'SuperAdmin'), new Hero(2, 'Claude', 'SuperAdmin2')];
        for(let i=0 ; i<200; i++){
            this.heroesList.push(new Hero(i+10, `Test#${i}`, `description#${i}`))
        }
     }
}