import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorItemComponent } from './configurator-item.component';

describe('ConfiguratorItemComponent', () => {
  let component: ConfiguratorItemComponent;
  let fixture: ComponentFixture<ConfiguratorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguratorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
