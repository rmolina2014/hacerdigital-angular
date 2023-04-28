import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre:string | undefined;
  password:string | undefined;

  usuario={nombre:'',password:''}

  constructor(public userService: UsuariosService) {}


  Ingresar(){
    console.log(this.usuario);
 
   }  ;

  login() {
    const user = { id:'',nombre: this.nombre, password: this.password };
    this.userService.login(user).subscribe((data) => {
      console.log(data);
    });

  

}
}
