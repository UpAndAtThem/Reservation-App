import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditToolComponent } from './admin-edit-tool.component';

describe('AdminEditToolComponent', () => {
  let component: AdminEditToolComponent;
  let fixture: ComponentFixture<AdminEditToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
