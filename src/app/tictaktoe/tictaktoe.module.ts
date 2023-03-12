import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictaktoeComponent } from './tictaktoe.component';

@NgModule({
  declarations: [TictaktoeComponent],
  imports: [CommonModule],
  exports: [TictaktoeComponent],
})
export class TictaktoeModule {}
