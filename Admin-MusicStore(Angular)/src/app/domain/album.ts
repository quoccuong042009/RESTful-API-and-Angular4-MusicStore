import { Artist } from '../domain/artist';
import { Genre } from '../domain/genre';
import { Injectable }    from '@angular/core';

export class Album{
  public  albumId: number;
  public title: string;
  public price: number;
  public albumArtUrl : string;
  public genre : Genre;
  public artist : Artist;

  constructor(albumId: number, title: string, price: number, albumArtUrl : string, genre : Genre, artist : Artist){
     this.albumId = albumId;
      this.title = title;
      this.price = price;
      this.albumArtUrl = albumArtUrl;
      this.genre = genre ;
      this.artist = artist;
   }

  // constructor(albumId: number, title: string, price: number, albumArtUrl : string, genreId : number
  //   ,genreName : string,artistId : number, artistName : string){
  //    this.albumId = albumId;
  //     this.title = title;
  //     this.price = price;
  //     this.albumArtUrl = albumArtUrl;
  //     this.genre.genreId = genreId ;
  //     this.genre.genreName = genreName;
  //     this.artist.artistId = artistId;
  //     this.artist.artistName = artistName;
  //  }

}
