import { Component, OnInit } from '@angular/core';
import {HeroesComponent} from '../heroes/heroes.component';

@Component({
    moduleId: module.id,
    selector: 'test',
    templateUrl: './test.component.html',
    directives: [HeroesComponent]
})
export class TestComponent implements OnInit {
    
    test:string[] = ["Hello", 'super', 'cool', 'concept'];
    
    constructor() { }

    ngOnInit() { }

}