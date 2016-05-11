import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'An Angular 2 Force Awakens test super cool';
  test:string[] = ["Hello", 'super', 'cool', 'concept'];
}