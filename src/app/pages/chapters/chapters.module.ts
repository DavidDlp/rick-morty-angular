import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChaptersComponent } from './chapters.component';
import { ChaptersDetailComponent } from './pages/chapters-detail/chapters-detail.component';
import { ChaptersGalleryComponent } from './pages/chapters-gallery/chapters-gallery.component';


@NgModule({
  declarations: [
    ChaptersComponent,
    ChaptersDetailComponent,
    ChaptersGalleryComponent
  ],
  imports: [
    CommonModule,
    ChaptersRoutingModule
  ]
})
export class ChaptersModule { }
