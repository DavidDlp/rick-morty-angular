import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes-gallery',
  templateUrl: './personajes-gallery.component.html',
  styleUrls: ['./personajes-gallery.component.scss']
})
export class PersonajesGalleryComponent implements OnInit {

  @Input () listPers: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
