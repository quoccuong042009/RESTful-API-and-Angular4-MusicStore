import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AlbumService } from '../../service/album-service';
import { Album } from '../../domain/album';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  albumId : number;
  genreId : String;
  genreName : String;
  artistId : String;
  artistName : String;
  title : String;
  price : number;

  constructor(private albumService : AlbumService
    ,private router: ActivatedRoute
    ,private route: Router) { }

  ngOnInit() {
    this.albumId = this.router.snapshot.params['id'];
    this.genreId = this.router.snapshot.params['genreId'];
    this.genreName = this.router.snapshot.params['genreName'];
    this.artistId = this.router.snapshot.params['artistId'];
    this.artistName = this.router.snapshot.params['artistName'];
    this.title = this.router.snapshot.params['title'];
    this.price = this.router.snapshot.params['price'];
  }

}
