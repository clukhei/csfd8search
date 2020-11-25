import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory(){
  return player
}

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { SearchListComponent } from './components/search-list.component';
import { SearchFormComponent } from './components/search-form.component';
import { ResultComponent } from './components/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchDatabase } from './components/search.database';


const ROUTES: Routes = [
  {path: '', component: MainComponent},
  {path:'searchform', component: SearchFormComponent},
  {path: 'searchlist', component: SearchListComponent},
  {path: 'searchform/:genre/:q', component: ResultComponent},
  {path: '**', redirectTo:'/', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchListComponent,
    SearchFormComponent,
    ResultComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({player:playerFactory}),
    HttpClientModule
  ],
  providers: [SearchDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
