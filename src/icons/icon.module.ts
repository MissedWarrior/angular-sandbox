import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';

import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    IconComponent,
    DeleteComponent,
  ],
  exports: [IconComponent],
  imports: [
    CommonModule
  ],
  providers: [
    DeleteComponent,
  ]
})
export class IconModule {
}
