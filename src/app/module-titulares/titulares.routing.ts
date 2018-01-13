import {TitularesLayoutComponent} from './titulares-layout/titulares-layout.component';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const titularesRoutes: Routes = [
  {path: '', component: TitularesLayoutComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(titularesRoutes)],
  exports: [RouterModule]
})
export class TitularesRoutingModule {}

