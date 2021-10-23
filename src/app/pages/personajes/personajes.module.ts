import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { PersonajesDetailComponent } from './pages/personajes-detail/personajes-detail.component';
import { PersonajesGalleryComponent } from './pages/personajes-gallery/personajes-gallery.component';


@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajesDetailComponent,
    PersonajesGalleryComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
