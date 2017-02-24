import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TelaInicialPage } from '../pages/tela-inicial/tela-inicial';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { AddlistPage } from '../pages/addlist/addlist';
import { MapPage } from '../pages/map/map'

@NgModule({
  declarations: [
    MyApp,
    TelaInicialPage,
    ItemDetailsPage,
    ListPage,
    AddlistPage,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TelaInicialPage,
    ItemDetailsPage,
    ListPage,
    AddlistPage,
    MapPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
