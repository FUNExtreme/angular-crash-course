import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarOption } from '../../models/CarOption';

@Component({
  selector: 'cc-configurator-item',
  templateUrl: './configurator-item.component.html',
  styleUrls: ['./configurator-item.component.scss']
})
export class ConfiguratorItemComponent {

  @Input() option: CarOption;
  @Input() control?: FormControl;
}
