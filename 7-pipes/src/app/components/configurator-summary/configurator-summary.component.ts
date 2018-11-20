import { Component, OnInit } from '@angular/core';
import { ConfiguratorHelperService } from '../../services/configurator-helper.service';
import { CarOption } from '../../models/CarOption';

@Component({
  selector: 'cc-configurator-summary',
  templateUrl: './configurator-summary.component.html',
  styleUrls: ['./configurator-summary.component.scss']
})
export class ConfiguratorSummaryComponent implements OnInit {
  chosenOptions: CarOption[];

  constructor(private configuratorHelper: ConfiguratorHelperService) { }

  ngOnInit() {
    this.chosenOptions = this.configuratorHelper.chosenOptions;
  }
}
