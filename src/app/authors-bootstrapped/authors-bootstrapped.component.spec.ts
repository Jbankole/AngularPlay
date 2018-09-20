import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsBootstrappedComponent } from './authors-bootstrapped.component';

describe('AuthorsBootstrappedComponent', () => {
  let component: AuthorsBootstrappedComponent;
  let fixture: ComponentFixture<AuthorsBootstrappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsBootstrappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsBootstrappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
