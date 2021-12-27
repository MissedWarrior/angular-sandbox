import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

import { DeleteComponent } from './delete/delete.component';
import { DynamicViewDirective } from '../directives/dynamic-view.directive';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit, OnChanges {
  @Input()
  icon!: string;

  @ViewChild(DynamicViewDirective, { static: true })
  iconRef!: DynamicViewDirective;

  constructor() {
  }

  get activeIcon() {
    switch (this.icon) {
      case 'delete': {
        return DeleteComponent;
      }
      default: {
        throw new Error('No such icon');
      }
    }
  }

  ngOnInit() {
    this.iconRef.viewContainerRef.createComponent(this.activeIcon);
  }

  ngOnChanges(changes: any) {
    if (!changes.icon.isFirstChange()) {
      this.iconRef.viewContainerRef.clear();
      this.iconRef.viewContainerRef.createComponent(this.activeIcon);
    }
  }
}
