import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'cc-my-input-component',
  template: '{{ color }}'
})
export class MyInputComponentComponent implements OnInit {
  @Input() color: string;

  constructor() {
    // color will still be undefined here
  }

  ngOnInit() {
    console.log('The component\'s input color is ' + this.color);
  }
}

