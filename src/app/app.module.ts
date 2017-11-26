import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreTitleComponent } from './core/core-title/core-title.component';


@NgModule({
  declarations: [
    AppComponent,
    CoreTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
