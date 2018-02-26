import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { CoreModule } from '../../../core/core.module';
import { UserModule } from '../../user.module';

import { UserPageComponent } from './user-page.component';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;
  let afAuth: AngularFireAuth;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule,
        UserModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    afAuth = TestBed.get(AngularFireAuth);
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    const signInWithPopupSpy = spyOn(afAuth.auth, 'signInWithPopup');
    component.login();
    expect(signInWithPopupSpy).toHaveBeenCalled();
  });

  it('should log out', () => {
    const signOutSpy = spyOn(afAuth.auth, 'signOut');
    component.logout();
    expect(signOutSpy).toHaveBeenCalled();
  });
});