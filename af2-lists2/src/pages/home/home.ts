//importes de componente exerto
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  musicas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire, public actionSheetCtrl: ActionSheetController) {
      //Acessando Banco de Dados
      console.log(af.database.list('/musicas'));
      this.musicas = af.database.list('/musicas');
  }

  mostrarOpcoes(musicaId, musicaTitulo){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'O que você quer fazer?',
      buttons: [
        {
          text: 'Deletar Música',
          role: 'destructive',
          handler: () => {
            this.removerMusica(musicaId);
          }
        },{
          text: 'Atualizar Música',
          handler: () => {
            this.atualizarMusica(musicaId, musicaTitulo);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicado');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removerMusica(musicaId: string){
    this.musicas.remove(musicaId);
  }

  atualizarMusica(musicaId: string, musicaTitulo: string){
    let prompt = this.alertCtrl.create({
    title: 'Noma da Música',
    message: "Atualizar Música",
    inputs: [
      {
        name: 'tituloVar',
        placeholder: 'Título',
        value: musicaTitulo
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancelar clicado');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          this.musicas.update(musicaId, {
            titulo: data.tituloVar
          });
        }
      }
    ]
  });
  prompt.present();
  }

  adicionarMusicas(){
        let prompt = this.alertCtrl.create({
        title: 'Nome da Música',
        message: "Entre com um nome para esta nova música ser adicionada",
        inputs: [
          {
            name: 'titulo',
            placeholder: 'Título'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancelar Clicado');
            }
          },
          {
            text: 'Salvar',
            handler: data => {
              this.musicas.push({
                titulo: data.titulo
              });
            }
          }
        ]
      });
      prompt.present();
  }
}
