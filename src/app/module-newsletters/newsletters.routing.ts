import {NewslettersLayoutComponent} from './newsletters-layout/newsletters-layout.component';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const newslettersRoutes: Routes = [
  {path: '', component: NewslettersLayoutComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(newslettersRoutes)],
  exports: [RouterModule]
})
export class NewslettersRoutingModule {}

