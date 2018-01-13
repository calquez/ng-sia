import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedMaterialModule} from './shared-material/shared-material-module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    SharedMaterialModule
  ],

})
export class SharedModule {}
