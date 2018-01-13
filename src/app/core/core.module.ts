import { SharedMaterialModule } from '../shared/shared-material/shared-material-module';
import {CoreErrorComponent} from './core-error/core-error.component';
import {CoreFooterComponent} from './core-footer/core-footer.component';
import {CoreHeaderComponent} from './core-header/core-header.component';
import {CoreLayoutComponent} from './core-layout/core-layout.component';
import {CoreLoginComponent} from './core-login/core-login.component';
import { CoreServiceLoginService } from './core-services-login/core-service-login.service';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CoreLoginComponent,
    CoreErrorComponent,
    CoreLayoutComponent,
    CoreHeaderComponent,
    CoreFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedMaterialModule
  ],
  exports: [
    CoreErrorComponent,
    CoreLoginComponent,
    CoreLayoutComponent
  ],
  providers: [
    CoreServiceLoginService
  ]
})
export class CoreModule {}
