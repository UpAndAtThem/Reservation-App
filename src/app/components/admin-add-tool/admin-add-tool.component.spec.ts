import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddToolComponent } from './admin-add-tool.component';

describe('AdminAddToolComponent', () => {
  let component: AdminAddToolComponent;
  let fixture: ComponentFixture<AdminAddToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
