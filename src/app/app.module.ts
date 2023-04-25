import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtraCarpetaComponent } from './listado/otra-carpeta/otra-carpeta.component';
import { FormsModule } from '@angular/forms';
//LIBRERIAS QUE SENECESITAN
@NgModule({
  declarations: [
    AppComponent,
    OtraCarpetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
