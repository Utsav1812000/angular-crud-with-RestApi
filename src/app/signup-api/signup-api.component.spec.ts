import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupApiComponent } from './signup-api.component';

describe('SignupApiComponent', () => {
  let component: SignupApiComponent;
  let fixture: ComponentFixture<SignupApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
