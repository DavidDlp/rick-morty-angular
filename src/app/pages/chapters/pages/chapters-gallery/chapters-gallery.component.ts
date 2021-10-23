import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters-gallery',
  templateUrl: './chapters-gallery.component.html',
  styleUrls: ['./chapters-gallery.component.scss']
})
export class ChaptersGalleryComponent implements OnInit {

  @Input () listChapters: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
