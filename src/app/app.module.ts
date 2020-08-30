import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { propertycardComponent } from './Property/Property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
   declarations: [
      AppComponent,
      propertycardComponent,
      PropertyListComponent,
      NavBarComponent
   ],
   imports: [
	 BrowserModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
