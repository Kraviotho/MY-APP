import {RouterModule, Routes} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//servicios
import {EquipoService} from './equipo.service';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
{ path: 'contacto', component: ContactoComponent},
{ path: 'equipo:id', component: EquipoComponent},
{ path: 'nosotros', component: NosotrosComponent},
{ path: '', component: InicioComponent,pathMatch:'full'},
{ path: '**', component: NotFoundComponent,pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    EncabezadoComponent,
    CuerpoComponent,
    ContactoComponent,
    NosotrosComponent,
    InicioComponent,
    NotFoundComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
