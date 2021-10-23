import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServLocationService } from 'src/app/shared/services/serv-location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

   public locationDetail: any = {}

  constructor( private route: ActivatedRoute, private servLocation: ServLocationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      let idLocation = param.get('id')
      console.log(idLocation)

    this.servLocation.getLocationById(idLocation).subscribe ((location) => { this.locationDetail = location
    console.log(this.locationDetail)    
    })
  })
  }
}
