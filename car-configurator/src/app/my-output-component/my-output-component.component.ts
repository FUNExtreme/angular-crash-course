import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cc-my-output-component',
  template: '<button (click)="onClick()"></button>'
})
export class MyOutputComponentComponent {
  private isOpen = false;

  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();

  onClick = () => {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.open.next();
    } else {
      this.close.next();
    }
  }
}

