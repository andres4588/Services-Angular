import { AccountService } from './../account.service';
import { LogginServices } from './../logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LogginServices]
})
export class NewAccountComponent {


  constructor(private logginService: LogginServices, private accounService: AccountService){
    this.accounService.statusUpdate.subscribe(
      (status: string) => alert('New status: '+ status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accounService.addAccount(accountName, accountStatus);
    //this.logginService.longStatusChange(accountStatus)
   
  }
}
