import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodalComponent } from './ngmodal.component';

describe('NgmodalComponent', () => {
  let component: NgmodalComponent;
  let fixture: ComponentFixture<NgmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
