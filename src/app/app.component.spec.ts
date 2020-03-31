import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { userReducers } from './store/reducers/user.reducers';
import { GetUsers, GetUsersSuccess, RemoveUser } from './store/actions/user.actions';
import { initialUserState } from './store/state/user.state';
import { DUMMY_USERS } from './assets/dummy-users';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { DUMMY_STATE } from './assets/dummy-test';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  describe('default', () => {
    it('should return init state', () => {
      const noopAction = new GetUsers();
      const newState = userReducers(undefined, noopAction);
      const initState = initialUserState;
      expect(newState).toEqual(initState);
    });
  });

  describe('Get Users Success Action', () => {
    it('should dispatch get users success action', () => {
      const expectedAction = new GetUsersSuccess(DUMMY_USERS);
      const store = jasmine.createSpyObj<Store<IAppState>>('store', ['dispatch']);
      store.dispatch(new GetUsersSuccess(DUMMY_USERS));

      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('GetUsersSuccess', () => {
    it('should return isLoading true', () => {
      const initState = initialUserState;
      const getUsersSuccesAction = new GetUsersSuccess(DUMMY_USERS.list.entries);
      const newState = userReducers(initState, getUsersSuccesAction);
      expect(newState.users.length).toBe(4);
    });
  });

  describe('Remove User', () => {
    it('should dispatch get user success', () => {
      // tslint:disable-next-line: max-line-length
      const initState = DUMMY_STATE;      // tslint:disable-next-line: max-line-length
      const user = { entry: { firstName: 'Administrator', emailNotificationsEnabled: true, company: {}, id: 'admin', enabled: true, email: 'admin@alfresco.com' } };
      const removeUserAction = new RemoveUser(user);
      const newState = userReducers(initState, removeUserAction);
      expect(initState.users.length).toBe(4);
      expect(newState.users.length).toBe(3);
    });
  });
});
