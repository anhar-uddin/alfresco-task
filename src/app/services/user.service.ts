import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DUMMY_USERS } from '../assets/dummy-users';

@Injectable()
export class UserService {

  constructor() { }

  dummyData: any = DUMMY_USERS;

  async getUsers(): Promise<Observable<any>> {
    return await this.dummyData;
  }

}
