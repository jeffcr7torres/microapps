import { Component } from '@angular/core';
import { GlobalServiceService } from './services/global-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RECIBIDO DESDE SIDEBAR';
  textoRecibido: string;
  /**
   *
   */
   constructor() {
    if (window.addEventListener) {
      window.addEventListener("storage", this._listener, false);
  }
   }
   private _listener = () => {
    this.textoRecibido = localStorage.getItem('data').toUpperCase();
 }

  
}
