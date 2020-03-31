import { EUserActions } from './../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.RemoveUser: {
      return {
        ...state,
        users: state.users.filter(user => user.entry.id !== action.payload.entry.id)
      };
    }

    default:
      return state;
  }
};
