import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedMaterialModule} from '../shared/shared-material/shared-material-module';
import {EventosLayoutComponent} from './eventos-layout/eventos-layout.component';
import {EventosHeaderComponent} from './eventos-header/eventos-header.component';
import {EventosNavbarComponent} from './eventos-navbar/eventos-navbar.component';
import {EventosRoutingModule} from './eventos.routing';
import {EventosPanelComponent} from './eventos-panel/eventos-panel.component';
import {EventosPreviewComponent} from './eventos-preview/eventos-preview.component';

@NgModule({
  declarations: [
    EventosLayoutComponent,
    EventosHeaderComponent,
    EventosNavbarComponent,
    EventosPanelComponent,
    EventosPreviewComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    EventosRoutingModule
  ],
  exports: [
  ]
})
export class EventosModule {}
