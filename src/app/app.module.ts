import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from "./modulos/home/home-routing.module";
import { MenuComponent } from './shared/componentes/menu/menu.component';
import { HomeComponent } from "./modulos/home/home/home.component";
import { GeneradorGrantsService } from './services/bbdd/generador-grants/generador-grants.service';
import { GeneradorCreateService } from './services/bbdd/generador-create/generador-create.service';
import { HomeModule } from './modulos/home/home.module';
import { BBDDModule } from './modulos/bbdd/bbdd.module';
import { TrackersModule } from './modulos/trackers/trackers.module';
import { PortapapelesComponent } from './shared/componentes/portapapeles/portapapeles.component';
import { MatButtonModule } from "@angular/material/button";
import { ModalComponent } from './shared/componentes/modal/modal.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PortapapelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    BBDDModule,
    HomeModule,
    TrackersModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  entryComponents: [ModalComponent],
  providers: [GeneradorGrantsService, GeneradorCreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
