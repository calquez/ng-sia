import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatInputModule, MatButtonModule, MatCheckboxModule, MatIcon, MatIconModule,
  MatMenuModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, 
  MatChipsModule, MatButtonToggleModule, MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  exports: [
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
})
export class SharedMaterialModule {}
