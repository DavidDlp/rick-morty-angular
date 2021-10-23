import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';
import { LocationGalleryComponent } from './pages/location-gallery/location-gallery.component';


@NgModule({
  declarations: [
    LocationComponent,
    LocationDetailComponent,
    LocationGalleryComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
