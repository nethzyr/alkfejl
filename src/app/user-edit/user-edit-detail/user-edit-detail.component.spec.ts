import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditDetailComponent } from './user-edit-detail.component';

describe('UserEditDetailComponent', () => {
  let component: UserEditDetailComponent;
  let fixture: ComponentFixture<UserEditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
