import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from '../../service/album-service';
import { Artist } from '../../domain/artist';
import { Genre } from '../../domain/genre';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent implements OnInit {
  selectedAlbumId : number;
  selectedGenreId : number;
  selectedGenreName : String;
  selectedArtistId : number;
  selectedArtistName : String;
  selectedTitle : String;
  selectedPrice : number;
  genres : Genre[];
  artists : Artist[];

  constructor(private albumService : AlbumService
    ,private router: ActivatedRoute
    ,private route: Router) { }

  ngOnInit() {
    this.selectedAlbumId = this.router.snapshot.params['id'];
    this.selectedGenreId = this.router.snapshot.params['genreId'];
    this.selectedGenreName = this.router.snapshot.params['genreName'];
    this.selectedArtistId =  this.router.snapshot.params['artistId'];
    this.selectedArtistName = this.router.snapshot.params['artistName'];
    this.selectedTitle = this.router.snapshot.params['title'];
    this.selectedPrice = this.router.snapshot.params['price'];
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
  onUpdate(f: NgForm){
    this.albumService.updateAlbum( this.selectedAlbumId, this.selectedGenreId, this.selectedArtistId, this.selectedTitle, this.selectedPrice)
    .subscribe((error) => console.log(error));
    this.route.navigate(['/']);
  }
}
