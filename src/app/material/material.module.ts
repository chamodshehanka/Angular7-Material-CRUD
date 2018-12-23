import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      Material.MatToolbarModule,
      Material.MatGridListModule,
      Material.MatFormFieldModule,
      Material.MatInputModule,
      Material.MatTableModule,
      Material.MatButtonModule,
  ],
  exports: [
      Material.MatToolbarModule,
      Material.MatGridListModule,
      Material.MatFormFieldModule,
      Material.MatInputModule,
      Material.MatTableModule,
      Material.MatButtonModule,
  ]
})
export class MaterialModule { }
