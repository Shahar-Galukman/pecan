import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DbNavigatorModule } from "./db-navigator/db-navigator.module";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	declarations: [
		AppComponent
	],
  imports: [
    BrowserModule,
	AppRoutingModule,
    DbNavigatorModule,
    RouterModule
  ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
