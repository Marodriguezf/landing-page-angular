import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MangaComponent } from './manga/manga.component';
import { AnimeComponent } from './anime/anime.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'manga',component:MangaComponent},
  {path: 'manga/:mangaId',component:MangaDetailsComponent},
  {path: 'anime',component:AnimeComponent},
  {path: 'personajes',component:PersonajesComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
