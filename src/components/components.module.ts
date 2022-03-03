import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    RandomComponent,
  ],
  exports: [
    RandomComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ComponentsModule { }
