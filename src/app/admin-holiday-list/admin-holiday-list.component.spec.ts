import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHolidayListComponent } from './admin-holiday-list.component';

describe('AdminHolidayListComponent', () => {
  let component: AdminHolidayListComponent;
  let fixture: ComponentFixture<AdminHolidayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHolidayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
