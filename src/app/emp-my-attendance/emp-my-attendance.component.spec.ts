import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMyAttendanceComponent } from './emp-my-attendance.component';

describe('EmpMyAttendanceComponent', () => {
  let component: EmpMyAttendanceComponent;
  let fixture: ComponentFixture<EmpMyAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpMyAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMyAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
