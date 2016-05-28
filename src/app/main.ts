import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {provide} from '@angular/core';
import { MATERIAL_PROVIDERS} from "ng2-material";

import {AppComponent} from './app.component';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

bootstrap(AppComponent, [HTTP_PROVIDERS,MATERIAL_PROVIDERS,
provide(AuthConfig, { useFactory: () =>{ 
    return new AuthConfig();
}}),
AuthHttp
]);