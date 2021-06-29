import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-sidebar';
  texto: any;
  showSidebar: boolean = true;

  /**
   *
   */
  constructor() {
 
  }
  handleSidebar() {
    let sidebar: any = document.getElementById('sidebar');

    if (this.showSidebar) {
      sidebar.classList.add('hidden');
      this.showSidebar = false;
    } else {
      sidebar.classList.remove('hidden');
      this.showSidebar = true;
    }
  }

  limpiar(){
    this.texto="";
  }

  valorTexto(){
    console.log(this.texto);
    
  }

  pasarDatos(){
    //Swal.fire('Success...', 'Data  ' + this.texto + '  was bind in Content from micro-sidebar', 'success')

    Swal.fire({
      title: 'Buscando al empleado',
      html: 'Un momento por favor...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });
    setTimeout(() => {
      Swal.close();
    }, 4000);
    this.changeValue();
    
  }

  changeValue() {
    var x = window.open("", "myWindow", "width=200,height=100");
    x.localStorage.setItem("data", this.texto);
    x.close();
  }
}
