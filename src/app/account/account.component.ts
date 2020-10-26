import { AccountService } from './../account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogginServices } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [LogginServices]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LogginServices, 
              private accountService: AccountService){
  }

  onSetTo(status: string) {
    this.accountService.updateStatus( this.id, status);
    this.accountService.statusUpdate.emit(status);
    //this.logginService.longStatusChange(status);
    //console.log('A server status changed, new status: ' + status);
  }
}
