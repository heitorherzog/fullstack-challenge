import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmployeeComponent } from './form-Employee.component';

describe('FormEmployeeComponent', () => {
  let component: FormEmployeeComponent;
  let fixture: ComponentFixture<FormEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
