import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpHolidayListComponent } from './emp-holiday-list.component';

describe('EmpHolidayListComponent', () => {
  let component: EmpHolidayListComponent;
  let fixture: ComponentFixture<EmpHolidayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpHolidayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
