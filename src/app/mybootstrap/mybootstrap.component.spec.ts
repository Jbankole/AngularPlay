import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybootstrapComponent } from './mybootstrap.component';

describe('MybootstrapComponent', () => {
  let component: MybootstrapComponent;
  let fixture: ComponentFixture<MybootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
