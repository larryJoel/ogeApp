import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


//routers
import { appRouting } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NoticiasComponent,
    ContactoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
