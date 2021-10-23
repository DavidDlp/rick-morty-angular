import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServPersonajesService } from 'src/app/shared/services/serv-personajes.service';

@Component({
  selector: 'app-personajes-detail',
  templateUrl: './personajes-detail.component.html',
  styleUrls: ['./personajes-detail.component.scss']
})
export class PersonajesDetailComponent implements OnInit {
  public charactersDetail: any = {}

  constructor(private route: ActivatedRoute, private servPersonajes:ServPersonajesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      let idcharacter = param.get('id')
      console.log(idcharacter)

      this.servPersonajes.getCharacterById(idcharacter).subscribe ((character)=>{ this.charactersDetail = character
        console.log(this.charactersDetail)

      })
    })
  }

}
