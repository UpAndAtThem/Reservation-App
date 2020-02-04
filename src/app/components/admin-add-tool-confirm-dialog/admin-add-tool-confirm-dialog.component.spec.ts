import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddToolConfirmDialogComponent } from './admin-add-tool-confirm-dialog.component';

describe('AdminAddToolConfirmDialogComponent', () => {
  let component: AdminAddToolConfirmDialogComponent;
  let fixture: ComponentFixture<AdminAddToolConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddToolConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddToolConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
