import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController } from "ionic-angular";
import { GooglePlus } from "@ionic-native/google-plus";
import { HomePage } from "../home/home";
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
  providers:[
    GooglePlus
  ]
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googlePlus: GooglePlus,
    private menuController : MenuController,
    private pusuario : UsuarioProvider,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login_google() {
    this.googlePlus
      .login({})
      .then(res => {
        this.pusuario.login_google(res).subscribe(
          data => {
    
            if(data.ok){
    
              this.storage.set("token", data.token);
              this.storage.set("usuario", data.usuarioNew);
    
              this.menuController.enable(true);

              console.log(data);
    
              this.navCtrl.setRoot(HomePage);
            }
    
          }, err => {
    
          }
        )
      })
      .catch(err => console.error(err));
  }
}
