import { Album } from '../domain/album';

export class Genre{
  public genreId : number;
	public genreName : string;
	// public albums : Album[];

  constructor( genreId : number, genreName : string){
    this.genreId = genreId;
    this.genreName = genreName;
  }
}
