import { Component } from '@angular/core';
import { UserService } from '@ec.com.smx/kng-components-v2/k-security';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-header';

  /**
   *
   */
  constructor(public readonly userService: UserService) {
    
  }

  home(){
    Swal.fire("Home from micro-header");
  }

  save(){
    Swal.fire("Save from micro-header");
  }

  logOut(){
    this.userService.logout();
  }
}
