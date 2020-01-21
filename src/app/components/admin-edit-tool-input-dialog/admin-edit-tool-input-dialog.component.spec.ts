import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditToolInputDialogComponent } from './admin-edit-tool-input-dialog.component';

describe('AdminEditToolInputDialogComponent', () => {
  let component: AdminEditToolInputDialogComponent;
  let fixture: ComponentFixture<AdminEditToolInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditToolInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditToolInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
