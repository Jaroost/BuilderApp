import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HeroesComponent} from './heroes/heroes.component';
import {Auth0Component} from './auth0/auth0.component';
import {ProfileComponent} from './profile/profile.component';
import {TestComponent} from './test/test.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeroesComponent, Auth0Component, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileComponent
  },
  {
    path: '/test',
    name: 'Test',
    component: TestComponent
  }
])
export class AppComponent {
}