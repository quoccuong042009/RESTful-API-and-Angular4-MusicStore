import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumService } from '../service/album-service';
import { Album } from '../domain/album';
import { Genre } from '../domain/genre';
import { Artist } from '../domain/artist';

@Component({
  selector: 'app-store-manage',
  templateUrl: './store-manage.component.html',
  styleUrls: ['./store-manage.component.css']
})
export class StoreManageComponent implements OnInit {
  albums : Album[];
  genres: Genre[];
  artists : Artist[];
  constructor(private albumService : AlbumService,private router: Router) { }

  ngOnInit() {
    this.albumService.getAlbums()
    .subscribe(
      (albums : any[]) => {this.albums = albums},
      (error) => console.log(error)
    );
  }


}
