import { Component } from '@angular/core';
import { UserService } from '@ec.com.smx/kng-components-v2/k-security';
//import { KMessageService } from '@ec.com.smx/kng-components-v2/k-common/k-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kng-web-base-v2';
  processDocument: any;
  processRuc: any;
  processCellPhone: any;
  processLandline: any;
  processNumber: any;
  processNumberD: any;
  processUpperCase:any;

/**
 *
 */
constructor(private userService: UserService) {

}

logOut(){
  this.userService.logout();
}

  //constructor(private readonly messageService: KMessageService,) { }
/*
  formValid() {
    this.messageService.info('lalalal');
  }
  clickSearch(form) {
    console.log(form);
  }*/
}
