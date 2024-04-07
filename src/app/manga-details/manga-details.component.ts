import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.css']
})
export class MangaDetailsComponent implements OnInit {

  manga: string ='';
  constructor(private _route:ActivatedRoute) { }
    ngOnInit(): void{
      this._route.params.subscribe(params => {
        this.manga = params['mangaId'];
        
      });
    }
  }



