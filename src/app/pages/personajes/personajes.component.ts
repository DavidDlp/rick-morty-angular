import { Component, OnInit } from '@angular/core';
import { ServPersonajesService } from 'src/app/shared/services/serv-personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  characterData: any = []
  characterInfo: any = []

  constructor(private servPersonajes:ServPersonajesService) { }

  ngOnInit(): void {
    this.servPersonajes.getCharacter().subscribe((character:any) =>{
      this.characterData = character.results
      this.characterInfo = character.info
      console.log(this.characterData)
    })
  }

}
