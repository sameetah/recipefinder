import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserProfileComponent } from './login-user-profile.component';

describe('LoginUserProfileComponent', () => {
  let component: LoginUserProfileComponent;
  let fixture: ComponentFixture<LoginUserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginUserProfileComponent]
    });
    fixture = TestBed.createComponent(LoginUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
