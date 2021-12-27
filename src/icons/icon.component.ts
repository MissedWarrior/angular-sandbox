import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnChanges {
  @Input()
  icon!: string;

  @ViewChild('iconRef', { static: true })
  iconRef!: ViewContainerRef;

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

  ngOnChanges(changes: any) {
    if (changes.icon.isFirstChange()) {
      this.iconRef.createComponent(this.activeIcon);
    } else {
      this.iconRef.clear();
      this.iconRef.createComponent(this.activeIcon);
    }
  }
}
