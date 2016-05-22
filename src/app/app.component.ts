import {Component} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {Auth0Component} from './auth0/auth0.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeroesComponent, Auth0Component]
})
export class AppComponent {
  title = 'An Angular 2 Force Awakens test super cool 2';
  test:string[] = ["Hello", 'super', 'cool', 'concept'];
}