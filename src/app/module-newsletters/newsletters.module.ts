import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedMaterialModule} from '../shared/shared-material/shared-material-module';
import {NewslettersLayoutComponent} from './newsletters-layout/newsletters-layout.component';
import {NewslettersHeaderComponent} from './newsletters-header/newsletters-header.component';
import {NewslettersNavbarComponent} from './newsletters-navbar/newsletters-navbar.component';
import {NewslettersRoutingModule} from './newsletters.routing';
import {NewslettersPanelComponent} from './newsletters-panel/newsletters-panel.component';
import {NewslettersPreviewComponent} from './newsletters-preview/newsletters-preview.component';

@NgModule({
  declarations: [
    NewslettersLayoutComponent,
    NewslettersHeaderComponent,
    NewslettersNavbarComponent,
    NewslettersPanelComponent,
    NewslettersPreviewComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    NewslettersRoutingModule
  ],
  exports: [
  ]
})
export class NewslettersModule {}
