import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-gallery',
  templateUrl: './location-gallery.component.html',
  styleUrls: ['./location-gallery.component.scss']
})
export class LocationGalleryComponent implements OnInit {

  @Input () list: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
