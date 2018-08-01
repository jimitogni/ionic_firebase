import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-salvar',
  templateUrl: 'salvar.html',
})
export class SalvarPage {

  produto: any;
  form: FormGroup;
  titulo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public db: FirebaseProvider, private toast: ToastController,
              private formBuilder: FormBuilder
              ) {
      this.produto = this.navParams.data.produto || { };
      this.createForm();
      this.setupPageTitle();
  }

  private setupPageTitle() {
    this.titulo = this.navParams.data.produto ? 'Alterando contato' : 'Novo contato';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.produto.key],
      nome: [this.produto.nome, Validators.required],
      preco: [this.produto.preco, Validators.required],
      descricao: [this.produto.descricao, Validators.required],
    });
  }

  salvar(){
    if (this.form.valid) {
      this.db.salvar(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
