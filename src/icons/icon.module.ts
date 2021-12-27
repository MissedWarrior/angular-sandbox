import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';

import { DynamicViewDirective } from '../directives/dynamic-view.directive';

import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    IconComponent,
    DeleteComponent,
    DynamicViewDirective,
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
