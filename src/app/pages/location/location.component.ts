import { Component, OnInit } from '@angular/core';
import { ServLocationService } from 'src/app/shared/services/serv-location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  locationData: any = []
  locationInfo: any = {}

  constructor( private servLocation: ServLocationService) { }

  ngOnInit(): void {
    this.servLocation.getLocation().subscribe((location:any) =>{
      this.locationData = location.results
      this.locationInfo = location.info
      console.log(this.locationData)
    })

    
  }

}
