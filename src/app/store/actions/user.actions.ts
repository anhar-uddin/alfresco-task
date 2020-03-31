import { Action } from '@ngrx/store';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  RemoveUser = '[User] Remove User'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload) { }
}
export class RemoveUser implements Action {
  public readonly type = EUserActions.RemoveUser;
  constructor(public payload) { }
}

export type UserActions = GetUsers | GetUsersSuccess | RemoveUser;
