import {Component} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeroesComponent]
})
export class AppComponent {
  title = 'An Angular 2 Force Awakens test super cool 2';
  test:string[] = ["Hello", 'super', 'cool', 'concept'];
}