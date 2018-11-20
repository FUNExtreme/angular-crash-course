import { Injectable } from '@angular/core';
import { CarOption } from '../models/CarOption';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorHelperService {
  private optionsFormGroup: FormGroup;

  options: CarOption[] = [
    { id: '17w', name: '17" wheels', price: 1800 },
    { id: 'bl', name: 'blinkers', price: 5 },
    { id: 'aa', name: 'Android Auto', price: 250 }
  ];

  get chosenOptions(): CarOption[] {
    if (!this.optionsFormGroup) {
      return [];
    }

    const ids = Object.entries(this.optionsFormGroup.value)
      .filter(([_, isSelected]) => isSelected)
      .map(([key, _]) => key);

    const options = this.options.filter((option: CarOption) => ids.includes(option.id));
    return options;
  }

  buildFormFromCarOptions = (): FormGroup => {
    const optionControls = {};
    for (const option of this.options) {
      optionControls[option.id] = new FormControl(false);
    }
    this.optionsFormGroup = new FormGroup(optionControls);

    return this.optionsFormGroup;
  }
}
