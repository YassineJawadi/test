import {Component, OnInit} from '@angular/core';
import {TestService} from "../services/test.service";
import {Album} from "../models/Album";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  albums:Album []=[];
  constructor(private testService:TestService) {
  }

  ngOnInit(): void {
    this.testService.getAlbums().subscribe((data:Album[])=>{
      this.albums = data.filter(album =>album.archived === 1);
    });
  }

}
