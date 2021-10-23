import { Component, OnInit } from '@angular/core';
import { ServChaptersService } from 'src/app/shared/services/serv-chapters.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

 public chaptersData: any = []
 public chaptersInfo: any = []

  constructor(private servChapters:ServChaptersService) { }

  ngOnInit(): void {
    this.servChapters.getChapters().subscribe((chapters:any) =>{
      this.chaptersData = chapters.results
      this.chaptersInfo = chapters.info
      console.log(this.chaptersData)
    })
  }

}
