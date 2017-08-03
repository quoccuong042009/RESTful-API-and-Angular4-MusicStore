import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AlbumService } from '../../service/album-service';
import { Artist } from '../../domain/artist';
import { Genre } from '../../domain/genre';

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})
export class StoreCreateComponent implements OnInit {
  genres : Genre[];
  artists : Artist[];
  selectedGenre : Genre;
  selectedArtist : Artist;
  genreId : number;
  artistId : number;
  title : String;
  price : number;

  constructor(private albumService : AlbumService,private router: Router) { }

  ngOnInit() {
    this.albumService.getGenres()
    .subscribe(
      (genres : any[]) => {this.genres = genres},
      (error) => console.log(error)
    );

    this.albumService.getAritsts()
    .subscribe(
      (artists : any[]) => {this.artists = artists},
      (error) => console.log(error)
    );


  }

  onCreate(f: NgForm){
    this.genreId = f.value.genreId;
    this.artistId = f.value.artistId;
    this.title = f.value.title;
    this.price = f.value.price;
    this.albumService.createAlbum(this.genreId, this.artistId, this.title, this.price).subscribe((error) => console.log(error));
    this.router.navigate(['/']);
  }

}
