import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultVaccineComponent } from './consult-vaccine.component';

describe('ConsultVaccineComponent', () => {
  let component: ConsultVaccineComponent;
  let fixture: ComponentFixture<ConsultVaccineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultVaccineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
