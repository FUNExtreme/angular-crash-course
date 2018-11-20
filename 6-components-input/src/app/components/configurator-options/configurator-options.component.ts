import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CarOption } from '../../models/CarOption';
import { ConfiguratorHelperService } from '../../services/configurator-helper.service';

@Component({
  selector: 'cc-configurator-options',
  templateUrl: './configurator-options.component.html',
  styleUrls: ['./configurator-options.component.scss']
})
export class ConfiguratorOptionsComponent implements OnInit {

  constructor(private configuratorHelper: ConfiguratorHelperService) {}

  optionsForm: FormGroup;
  options: CarOption[];

  ngOnInit() {
    this.optionsForm = this.configuratorHelper.buildFormFromCarOptions();
    this.options = this.configuratorHelper.options;
  }
}
