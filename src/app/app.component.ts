import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import {HeroesComponent} from './heroes/heroes.component';
import {ProfileComponent} from './profile/profile.component';
import {TestComponent} from './test/test.component';
import {RootComponent} from './root/root.component';
import { AuthHttp, tokenNotExpired , JwtHelper} from 'angular2-jwt';
declare var Auth0Lock; //indicate to Typescrit hey man the Auth0Lock is availlable in the cd.auth0.com/js/lock-8.1.min.js!


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeroesComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/',
        name: 'Root',
        component: RootComponent
    },
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
  lock = new Auth0Lock('bUfoWb8hk8OsP9VUV2gpr7WlFE5LOWb9', 'antoinejaquet.eu.auth0.com');
  jwtHelper: JwtHelper=new JwtHelper();
  constructor(private router:Router) { }

  ngOnInit() { }
  
  login() {
      this.lock.show((err:string, profile:string, id_token:string)=>{
          if (err){
              throw new Error(err);
          }
          
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', id_token);
          
          console.log(
              this.jwtHelper.decodeToken(id_token),
              this.jwtHelper.getTokenExpirationDate(id_token),
              this.jwtHelper.isTokenExpired(id_token)
          )
      });
  }
  
  logout() {
      localStorage.removeItem('profile');
      localStorage.removeItem('id_token');
      this.router.navigate(['Root']);
  }

  loggedIn() {
      return tokenNotExpired();
  }
}