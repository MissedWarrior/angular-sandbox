import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appOnInit]'
})
export class OnInitDirective implements OnInit {
  @Input()
  appOnInit?: (el: ElementRef) => void;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.appOnInit?.(this.el);
  }
}
