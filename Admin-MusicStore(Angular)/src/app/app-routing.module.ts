import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreManageComponent } from './store-manager/store-manage.component';
import { HeaderComponent } from './header/header.component';
import { StoreEditComponent } from './store-manager/store-edit/store-edit.component';
import { StoreCreateComponent } from './store-manager/store-create/store-create.component';
import { StoreRemoveComponent } from './store-manager/store-remove/store-remove.component';
import { StoreDetailsComponent } from './store-manager/store-details/store-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/storeManager', pathMatch: 'full' },
  { path : 'storeManager' , component : StoreManageComponent},
  { path : 'create' , component : StoreCreateComponent},
  { path: 'edit/:id/:genreId/:genreName/:artistId/:artistName/:title/:price',  component: StoreEditComponent },
  { path: 'details/:id/:genreId/:genreName/:artistId/:artistName/:title/:price', component: StoreDetailsComponent },
  { path: 'delete/:id/:title',     component: StoreRemoveComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
