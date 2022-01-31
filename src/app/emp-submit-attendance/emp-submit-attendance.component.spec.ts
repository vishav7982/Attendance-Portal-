import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSubmitAttendanceComponent } from './emp-submit-attendance.component';

describe('EmpSubmitAttendanceComponent', () => {
  let component: EmpSubmitAttendanceComponent;
  let fixture: ComponentFixture<EmpSubmitAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSubmitAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSubmitAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
