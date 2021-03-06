import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Acount',
      status: 'unknown'
    }
  ];
  statusUpdate = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {

  }

  AddAccount(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, newStatus: string) {
     this.accounts[id].status = newStatus;
     this.loggingService.logStatusChange(status);
  }
}
