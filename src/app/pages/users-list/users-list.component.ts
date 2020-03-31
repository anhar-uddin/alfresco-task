import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetUsers, RemoveUser } from 'src/app/store/actions/user.actions';
import { selectUserList } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  removeUser(user) {
    this.store.dispatch(new RemoveUser(user));
  }

}
