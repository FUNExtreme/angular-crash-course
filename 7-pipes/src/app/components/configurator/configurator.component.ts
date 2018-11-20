import { Component, OnInit } from '@angular/core';
import { ConfiguratorHelperService } from '../../services/configurator-helper.service';

@Component({
  selector: 'cc-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
  providers: [ConfiguratorHelperService]
})
export class ConfiguratorComponent {}
