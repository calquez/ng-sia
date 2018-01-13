import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedMaterialModule} from '../shared/shared-material/shared-material-module';
import {TitularesLayoutComponent} from './titulares-layout/titulares-layout.component';
import {TitularesHeaderComponent} from './titulares-header/titulares-header.component';
import {TitularesNavbarComponent} from './titulares-navbar/titulares-navbar.component';
import {TitularesRoutingModule} from './titulares.routing';
import {TitularesPanelComponent} from './titulares-panel/titulares-panel.component';
import {TitularesPreviewComponent} from './titulares-preview/titulares-preview.component';

@NgModule({
  declarations: [
    TitularesLayoutComponent,
    TitularesHeaderComponent,
    TitularesNavbarComponent,
    TitularesPanelComponent,
    TitularesPreviewComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    TitularesRoutingModule
  ],
  exports: [
  ]
})
export class TitularesModule {}
