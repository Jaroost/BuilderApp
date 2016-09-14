import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { HomeModule } from './home/home.module';
import {ToolbarModule} from './toolbar/toolbar.module';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), HomeModule, ToolbarModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }