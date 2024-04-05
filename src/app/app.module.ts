import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MangaComponent } from './manga/manga.component';
import { AnimeComponent } from './anime/anime.component';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MangaComponent,
    AnimeComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
