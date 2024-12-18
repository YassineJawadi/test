import {Component, OnInit} from '@angular/core';
import {TestService} from "../services/test.service";
import {Album} from "../models/Album";

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit{
  albums:Album[]=[];
  constructor(private testService:TestService) {
  }

  ngOnInit(): void {
    this.testService.getAlbums().subscribe((data:Album[])=>{
      this.albums = data;
    });
  }


}
