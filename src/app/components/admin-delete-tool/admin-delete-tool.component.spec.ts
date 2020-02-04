import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteToolComponent } from './admin-delete-tool.component';

describe('AdminDeleteToolComponent', () => {
  let component: AdminDeleteToolComponent;
  let fixture: ComponentFixture<AdminDeleteToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
