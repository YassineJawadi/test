import { Component } from '@angular/core';
import {Album} from "../models/Album";

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
album:Album= new Album();

  ajouter() {
    this.album.id ++;
    this.album.archived =0;
    this.album.creationDate = new Date ;
  }
}
