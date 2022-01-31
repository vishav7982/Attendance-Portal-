import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeptAttendanceComponent } from './admin-dept-attendance.component';

describe('AdminDeptAttendanceComponent', () => {
  let component: AdminDeptAttendanceComponent;
  let fixture: ComponentFixture<AdminDeptAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeptAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeptAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
