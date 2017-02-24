import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
 
@Component({
  selector: 'page-addlist',
  templateUrl: 'addlist.html'
})
export class AddlistPage {
 
    itens: any = [];
 
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
 
    }
 
    AddIten(){
 
        let prompt = this.alertCtrl.create({
            title: 'Adicionar Item',
            inputs: [{ type: 'string',placeholder: 'Produto', name: 'title'},
            {type: 'number',placeholder: 'Quantidade', name: 'quantidade'}],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Adicionar',
                    handler: data => {
                        this.itens.push(data);
                    }
                }
            ]
        });
 
        prompt.present();
    }
 
    editIten(iten){
 
        let prompt = this.alertCtrl.create({
            title: 'Editar Produto',
            inputs: [{ type: 'string',placeholder: 'Produto', name: 'title'},
            {type: 'number',placeholder: 'Quantidade', name: 'quantidade'}],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Salvar',
                    handler: data => {
                        let index = this.itens.indexOf(iten);
 
                        if(index > -1){
                          this.itens[index] = data;
                        }
                    }
                }
            ]
        });
 
        prompt.present();       
 
    }
 
    deleteIten(iten){
 
        let index = this.itens.indexOf(iten);
 
        if(index > -1){
            this.itens.splice(index, 1);
        }
    }
 
}