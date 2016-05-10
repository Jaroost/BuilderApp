import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'An Angular 2 Force Awakens test super cool';
  test:string[] = ["Hello", 'super', 'cool', 'concept'];
}