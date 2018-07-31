import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public db: AngularFireDatabase,) {
  }

  listarTodos() {
    return this.db.list('produtos/', ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }


  listar(key: string) {
    return this.db.object('produtos/' + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }


  salvar(produto: any){
    return new Promise((resolve, reject) => {
      if (produto.key) {
        this.db.list('produtos/')
          .update(produto.key, { nome: produto.nome, preco: produto.preco, descricao: produto.descricao })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list('produtos/')
          .push({ nome: produto.nome, preco: produto.preco, descricao: produto.descricao })
          .then(() => resolve());
      }
    })
  }

  deletar(key: string) {
    return this.db.list('produtos/').remove(key);
  }

}
