import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteToolConfirmDialogComponent } from './admin-delete-tool-confirm-dialog.component';

describe('AdminDeleteToolConfirmDialogComponent', () => {
  let component: AdminDeleteToolConfirmDialogComponent;
  let fixture: ComponentFixture<AdminDeleteToolConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteToolConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteToolConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
