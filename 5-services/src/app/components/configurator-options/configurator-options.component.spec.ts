import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorOptionsComponent } from './configurator-options.component';

describe('ConfiguratorOptionsComponent', () => {
  let component: ConfiguratorOptionsComponent;
  let fixture: ComponentFixture<ConfiguratorOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguratorOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
