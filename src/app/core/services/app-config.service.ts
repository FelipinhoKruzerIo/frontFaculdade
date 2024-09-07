import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
  keyStorageToken = 'token';
  userStorageToken = 'user';

  constructor() {}
}
