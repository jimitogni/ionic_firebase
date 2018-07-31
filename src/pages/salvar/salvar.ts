import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-salvar',
  templateUrl: 'salvar.html',
})
export class SalvarPage {

  /*roduto = {
    'nome': '',
    'preco': '',
    'descricao': ''
  };*/

  produto: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db: FirebaseProvider,
              private toast: ToastController
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalvarPage');
  }

  salvar(produto){
    this.db.salvar(produto).then(() => {
      this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
      this.navCtrl.pop();
    });
    console.log(produto);
  }

}
