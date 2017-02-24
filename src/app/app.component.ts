import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen , SQLite} from 'ionic-native';

import { TelaInicialPage } from '../pages/tela-inicial/tela-inicial';

import { ListPage } from '../pages/list/list';


@Component({
    templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make TelaInicialPage the root (or first) page
  
  rootPage: any = TelaInicialPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public menu: MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: TelaInicialPage },
      { title: 'My First List', component: ListPage }
    ];

    platform.ready().then(() => {
            StatusBar.styleDefault();
            let db = new SQLite();
            db.openDatabase({
                name: "data.db",
                location: "default"
            }).then(() => {
                db.executeSql("CREATE TABLE IF NOT EXISTS lista(id INTEGER PRIMARY KEY AUTOINCREMENT)", {}).then((data) => {
                    console.log("TABLE CREATED: ", data);
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
            }).then(() => {
                db.executeSql("CREATE TABLE IF NOT EXISTS item (id INTEGER PRIMARY KEY AUTOINCREMENT,idlista_fk INTEGER, produto TEXT, quantidade INTEGER, CONSTRAINT item_fk_lista_fkey FOREIGN KEY (idlista_fk) REFERENCES lista (id))", {}).then((data) => {
                    console.log("TABLE CREATED: ", data);
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
            });
        });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
