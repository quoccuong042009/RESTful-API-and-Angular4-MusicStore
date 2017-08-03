import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { StoreManageComponent } from './store-manager/store-manage.component';
import { HeaderComponent } from './header/header.component';
import { StoreEditComponent } from './store-manager/store-edit/store-edit.component';
import { StoreCreateComponent } from './store-manager/store-create/store-create.component';
import { StoreRemoveComponent } from './store-manager/store-remove/store-remove.component';
import { StoreDetailsComponent } from './store-manager/store-details/store-details.component';
import { OnlyNumber } from './service/decimal.directive';

import { AlbumService } from './service/album-service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StoreManageComponent,
    HeaderComponent,
    StoreEditComponent,
    StoreCreateComponent,
    StoreRemoveComponent,
    StoreDetailsComponent,
    OnlyNumber
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
