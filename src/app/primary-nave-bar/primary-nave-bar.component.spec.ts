import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNaveBarComponent } from './primary-nave-bar.component';

describe('PrimaryNaveBarComponent', () => {
  let component: PrimaryNaveBarComponent;
  let fixture: ComponentFixture<PrimaryNaveBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryNaveBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNaveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
