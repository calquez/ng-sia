import {CoreErrorComponent} from './core/core-error/core-error.component';
import {CoreLayoutComponent} from './core/core-layout/core-layout.component';
import {CoreLoginComponent} from './core/core-login/core-login.component';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const appRoutes: Routes = [
  {path: 'login', component: CoreLoginComponent, pathMatch: 'full'},
  {path: 'error', component: CoreErrorComponent, pathMatch: 'full'},
  {
    path: 'ng-sia', component: CoreLayoutComponent, children: [
      {path: 'newsletters', loadChildren: 'app/module-newsletters/newsletters.module#NewslettersModule'},
      {path: 'titulares', loadChildren: 'app/module-titulares/titulares.module#TitularesModule'},
      {path: 'eventos', loadChildren: 'app/module-eventos/eventos.module#EventosModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

