import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMakeReservationConfirmDialogComponent } from './user-make-reservation-confirm-dialog.component';

describe('UserMakeReservationConfirmDialogComponent', () => {
  let component: UserMakeReservationConfirmDialogComponent;
  let fixture: ComponentFixture<UserMakeReservationConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMakeReservationConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMakeReservationConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
