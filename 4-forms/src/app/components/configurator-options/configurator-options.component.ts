import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarOption } from '../../models/CarOption';

@Component({
  selector: 'cc-configurator-options',
  templateUrl: './configurator-options.component.html',
  styleUrls: ['./configurator-options.component.scss']
})
export class ConfiguratorOptionsComponent implements OnInit {

  options: CarOption[] = [
    { id: '17w', name: '17" wheels', price: 1800 },
    { id: 'bl', name: 'blinkers', price: 5 },
    { id: 'aa', name: 'Android Auto', price: 250 }
  ];

  optionsForm: FormGroup;

  ngOnInit() {
    const optionControls = {};
    for (const option of this.options) {
      optionControls[option.id] = new FormControl(false);
    }
    this.optionsForm = new FormGroup(optionControls);
  }
}
