import { Component } from '@angular/core';
import { mangaList } from './manga.mocks';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent {

  mangaList = mangaList;
}
