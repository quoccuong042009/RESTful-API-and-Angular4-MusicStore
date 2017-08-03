import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/Rx';

import { Album } from '../domain/album';
import { Artist } from '../domain/artist';
import { Genre } from '../domain/genre';

@Injectable()
export class AlbumService{
  // private GENRES = [
  //   {genreId : 1, genreName : 'Rock'},
  //   {genreId : 2, genreName : 'Jazz'},
  //   {genreId : 3, genreName : 'Metal'},
  //   {genreId : 4, genreName : 'Alternative'},
  //   {genreId : 5, genreName : 'Disco'},
  //   {genreId : 6, genreName : 'Blues'},
  //   {genreId : 7, genreName : 'Reggae'},
  //   {genreId : 8, genreName : 'Pop'}
  // ];
  //
  // private ARTISTS = [
  //   {artistId : 1, artistName : 'Aaron Copland & London Symphony Orchestra'},
  //   {artistId : 2, artistName : 'AC/DC'},
  //   {artistId : 3, artistName : 'Adrian Leaper & Doreen de Feis'},
  //   {artistId : 4, artistName : 'Aerosmith'},
  //   {artistId : 5, artistName : 'Aisha Duo'},
  //   {artistId : 6, artistName : 'Alanis Morissette'},
  //   {artistId : 7, artistName : 'Amy Winehouse'},
  //   {artistId : 8, artistName : 'Berliner Philharmoniker & Hans Rosbaud'}
  // ];
  //
  // private ALBUMS = [
  //       { albumId: 0,  title: 'Zeroooooooooooooooooo', price: 8.99 ,albumArtUrl : '',genreId : this.GENRES[0].genreId , artistId : this.ARTISTS[6].artistId},
  //       { albumId: 1,  title: 'Batman', price: 2.99 ,albumArtUrl : '',genreId : this.GENRES[3].genreId , artistId : this.ARTISTS[4].artistId},
  //       { albumId: 2,  title: 'SuperMan', price: 3.99 ,albumArtUrl : '',genreId : this.GENRES[2].genreId , artistId : this.ARTISTS[5].artistId},
  //       { albumId: 3,  title: 'ABC', price: 4.99 ,albumArtUrl : '',genreId : this.GENRES[4].genreId , artistId : this.ARTISTS[3].artistId},
  //       { albumId: 4,  title: 'DCE', price: 5.99 ,albumArtUrl : '',genreId : this.GENRES[5].genreId , artistId : this.ARTISTS[0].artistId},
  //       { albumId: 5,  title: 'QQQ', price: 6.99 ,albumArtUrl : '',genreId : this.GENRES[6].genreId , artistId : this.ARTISTS[1].artistId}
  // ];
  // private ALBUMS = [
  //       { albumId: 0,  title: 'Zeroooooooooooooooooo', price: 8.99 ,albumArtUrl : "",genreId : 1 ,genreName : 'Rock',artistId : 2 ,artistName : "MJ"},
  //       { albumId: 1,  title: 'Batman', price: 2.99 ,albumArtUrl : "",genreId : 2 ,genreName : 'Rock',artistId : 3 ,artistName : "Choir Of Westminster Abbey & Simon Preston"},
  //       { albumId: 2,  title: 'SuperMan', price: 3.99 ,albumArtUrl : "",genreId : 3 ,genreName : 'Rock',artistId : 3 ,artistName : "Chicago Symphony Orchestra & Fritz Reiner"},
  //       { albumId: 3,  title: 'ABC', price: 4.99 ,albumArtUrl : "",genreId : 4 ,genreName : 'Rock',artistId : 2 ,artistName : "MJ"},
  //       { albumId: 4,  title: 'DCE', price: 5.99 ,albumArtUrl : "",genreId : 5 ,genreName : 'Rock',artistId : 5 ,artistName : "Deep Purple"},
  //       { albumId: 5,  title: 'QQQ', price: 6.99 ,albumArtUrl : "",genreId : 6 ,genreName : 'Rock',artistId : 6 ,artistName : "MJ"},
  // ]
  private albumUrl = 'http://localhost:8080/StoreManager';
  private genreUrl = 'http://localhost:8080/StoreManager/Genre';
  private artistUrl = 'http://localhost:8080/StoreManager/Artist';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getAlbums() {
    return this.http.get(this.albumUrl).map(
      (response : Response) =>{
        const data = response.json();
        return data;
      }
    );
  }

  createAlbum(genreId, artistId, title,price){
    return this.http.post(this.albumUrl, JSON.stringify(
      {
    genre: {
        genreId: genreId
    },
    artist: {
        artistId: artistId
    },
    title: title,
    price: price
    })
    , {headers: this.headers});
  }

  deleteAlbum(albumId){
    const url = `${this.albumUrl}/${albumId}`;
    return this.http.delete(url, {headers: this.headers});
  }

  updateAlbum(albumId, genreId, artistId, title,price){
    const url = `${this.albumUrl}/${albumId}`;
    return this.http
      .put(url, JSON.stringify(
        {
             genre: {
                 genreId: genreId
             },
             artist: {
                 artistId: artistId
             },
             price: price,
             title: title,
             albumId: albumId
         }
      ), {headers: this.headers})
  }

  getAritsts(){
    return this.http.get(this.artistUrl).map(
      (response : Response) =>{
        const data = response.json();
        return data;
      }
    );
  }

  getGenres(){
    return this.http.get(this.genreUrl).map(
      (response : Response) =>{
        const data = response.json();
        return data;
      }
    );
  }

}
