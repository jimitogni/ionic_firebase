import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { SalvarPage } from '../salvar/salvar'
import { Observable } from 'rxjs/Observable'; //bug

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos: Observable<any>;

  constructor(public navCtrl: NavController, public provider: FirebaseProvider,
              private toast: ToastController, private db: AngularFireDatabase){
      this.produtos = this.provider.listarTodos();

      //grava algo direto no banco sem passar pelo form e provider
      //this.db.list('produtos/')
      //  .push({ nome: 'teste', preco: '333', descricao: 'teste' });
  }

  adicionar(){
      this.navCtrl.push(SalvarPage);
  }

  editar(produto: any) {
    // Maneira 1
    this.navCtrl.push(SalvarPage, { produto: produto });

    // Maneira 2
    //this.navCtrl.push(SalvarPage, { key: produto.key });
  }

  deletar(key: string) {
    if (key) {
      this.provider.deletar(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
}
