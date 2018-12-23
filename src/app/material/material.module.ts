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
      Material.MatMenuModule,
  ],
  exports: [
      Material.MatToolbarModule,
      Material.MatGridListModule,
      Material.MatFormFieldModule,
      Material.MatInputModule,
      Material.MatTableModule,
      Material.MatButtonModule,
      Material.MatMenuModule,
  ]
})
export class MaterialModule { }
