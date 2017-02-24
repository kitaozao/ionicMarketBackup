import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {SQLite} from "ionic-native";
import {AddlistPage} from '../addlist/addlist';
import {ListPage} from '../list/list';
import {MapPage} from '../map/map'


@Component({
  selector: 'page-tela-inicial',
  templateUrl: 'tela-inicial.html'
})

export class TelaInicialPage {
  public database: SQLite;
  public lista: Array<Object>;

  MapPage = MapPage;
  ListPage = ListPage;
  AddlistPage = AddlistPage;
  
  constructor(private navController: NavController, private platform: Platform) {
        this.platform.ready().then(() => {
            this.database = new SQLite();
            this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });
        });
    }

    public add() {
        this.database.executeSql("INSERT INTO lista (produto, quantidade) VALUES ('Nic', 'Raboy')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }
 
    public refresh() {
        this.database.executeSql("SELECT * FROM lista", []).then((data) => {
            this.lista = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.lista.push({produto: data.rows.item(i).produto, quantidade: data.rows.item(i).quantidade});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }


}
