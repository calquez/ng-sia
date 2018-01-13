import {EventosLayoutComponent} from './eventos-layout/eventos-layout.component';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const eventosRoutes: Routes = [
  {path: '', component: EventosLayoutComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(eventosRoutes)],
  exports: [RouterModule]
})
export class EventosRoutingModule {}

