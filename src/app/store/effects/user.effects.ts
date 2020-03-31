import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetUsersSuccess,
  EUserActions,
  GetUsers
} from '../actions/user.actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHttp: any) => of(new GetUsersSuccess(userHttp.list.entries)))
  );

  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}
