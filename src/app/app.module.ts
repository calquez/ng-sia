import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {CoreModule} from './core/core.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TitularesLayoutComponent} from './module-titulares/titulares-layout/titulares-layout.component';
import {TitularesNavbarComponent} from './module-titulares/titulares-navbar/titulares-navbar.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
//    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
//    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
