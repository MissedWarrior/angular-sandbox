import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicView]'
})
export class DynamicViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
