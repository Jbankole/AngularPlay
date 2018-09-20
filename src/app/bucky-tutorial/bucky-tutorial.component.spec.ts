import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckyTutorialComponent } from './bucky-tutorial.component';

describe('BuckyTutorialComponent', () => {
  let component: BuckyTutorialComponent;
  let fixture: ComponentFixture<BuckyTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuckyTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckyTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
