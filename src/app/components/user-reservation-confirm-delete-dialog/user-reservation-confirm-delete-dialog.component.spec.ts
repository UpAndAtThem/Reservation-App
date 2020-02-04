import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationConfirmDeleteDialogComponent } from './user-reservation-confirm-delete-dialog.component';

describe('UserReservationConfirmDeleteDialogComponent', () => {
  let component: UserReservationConfirmDeleteDialogComponent;
  let fixture: ComponentFixture<UserReservationConfirmDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReservationConfirmDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReservationConfirmDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
