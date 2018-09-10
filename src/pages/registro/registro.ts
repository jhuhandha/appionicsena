import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  formularioRegistro : FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private fb : FormBuilder,
    private pusuario : UsuarioProvider,
    private storage: Storage, 
    private menuController: MenuController) {

      this.formularioRegistro = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        telefono: ['', Validators.required],
        correo: ['', Validators.required],
        usuario: ['', Validators.required],
        clave: ['', Validators.required],
      });
  }

  ionViewDidLoad() {

  }

  guardar(){
    this.pusuario.registrar(this.formularioRegistro.value).subscribe(
      data => {

        if(data.ok){

          this.storage.set("token", data.token);
          this.storage.set("usuario", data.usuarioNew);

          this.menuController.enable(true);

          this.navCtrl.setRoot(HomePage);
        }

      }, err => {

      }
    )
  }

}
