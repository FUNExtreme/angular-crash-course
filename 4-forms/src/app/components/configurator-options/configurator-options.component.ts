import { Component, OnInit } from '@angular/core';
import { CarOption } from '../../models/CarOption';

@Component({
  selector: 'cc-configurator-options',
  templateUrl: './configurator-options.component.html',
  styleUrls: ['./configurator-options.component.scss']
})
export class ConfiguratorOptionsComponent {

  options: CarOption[] = [
    { id: 0, name: '17" wheels', price: 1800 },
    { id: 1, name: 'blinkers', price: 5 },
    { id: 2, name: 'Android Auto', price: 250 }
  ];
}
