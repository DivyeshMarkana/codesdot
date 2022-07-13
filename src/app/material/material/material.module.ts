import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
