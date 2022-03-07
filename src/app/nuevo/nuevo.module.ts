import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoComponent } from './partido/partido.component';



@NgModule({
  declarations: [
    PartidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PartidoComponent]
})
export class NuevoModule { }
