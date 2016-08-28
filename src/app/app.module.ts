/*import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {provide, enableProdMode} from '@angular/core';
import { MATERIAL_PROVIDERS} from "ng2-material";

import {AppComponent} from './app.component';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS,MATERIAL_PROVIDERS,
provide(AuthConfig, { useFactory: () =>{ 
    return new AuthConfig();
}}),
AuthHttp
]);*/

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule} from '@angular/router';
import {AuthHttp} from 'angular2-jwt';
import {routes} from './routes';
import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule, AuthHttp, RouterModule.forRoot(routes)],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}