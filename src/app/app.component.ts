import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    `
})
export class AppComponent {
  title = 'An Angular 2 Force Awakens test super cool';
}