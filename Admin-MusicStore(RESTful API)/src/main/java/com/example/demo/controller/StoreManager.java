package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Album;
import com.example.demo.domain.Artist;
import com.example.demo.domain.Genre;
import com.example.demo.service.AlbumService;
import com.example.demo.service.ArtistService;
import com.example.demo.service.GenreService;

@RestController
public class StoreManager {
	AlbumService albumService;
	GenreService genreService;
	ArtistService artistService;
	@Autowired
	public void AlbumController(AlbumService a){
		albumService = a;
	}
	
	@Autowired
	public void GenreController(GenreService s){
		genreService = s;
	}
	
	@Autowired
	public void ArtistService(ArtistService s){
		artistService = s;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/StoreManager", method = RequestMethod.GET)
	public List<Album> getAllAlbum(){
		return albumService.getAllAlbum();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/StoreManager/{albumId}", method = RequestMethod.PUT)
	public void Edit(@PathVariable String albumId, @RequestBody Album album){
		albumService.updateAlbumbyAlbumId(albumId, album.getTitle(),album.getPrice(), album.getArtist().getArtistId(), album.getGenre().getGenreId());
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping( value = "/StoreManager/{albumId}", method = RequestMethod.DELETE)
	public void onDelete(@PathVariable String albumId){
		albumService.deleteAlbumByAlbumId(albumId);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/StoreManager", method = RequestMethod.POST)
	public void Create(@RequestBody Album album){
		albumService.insertAlbum(album.getTitle(), album.getPrice(), album.getArtist().getArtistId(), album.getGenre().getGenreId());
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/StoreManager/Genre", method = RequestMethod.GET)
	public List<Genre> getAllGenre(){
		return genreService.getAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/StoreManager/Artist", method = RequestMethod.GET)
	public List<Artist> getAllArtist(){
		return artistService.getAll();
	}
}
