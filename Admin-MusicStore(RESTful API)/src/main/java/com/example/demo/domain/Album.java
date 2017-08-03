package com.example.demo.domain;


public class Album {
	private int AlbumId ;
	private String Title ;
	private double Price ;
	private String AlbumArtUrl;
	private Genre genre ; 
	private Artist artist;
	
	public Album(){}

	public Album(int albumId, String title, double price, String albumArtUrl, Genre genre, Artist artist) {
		super();
		AlbumId = albumId;
		Title = title;
		Price = price;
		AlbumArtUrl = albumArtUrl;
		this.genre = genre;
		this.artist = artist;
	}

	public int getAlbumId() {
		return AlbumId;
	}

	public void setAlbumId(int albumId) {
		AlbumId = albumId;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	public double getPrice() {
		return Price;
	}

	public void setPrice(double price) {
		Price = price;
	}

	public String getAlbumArtUrl() {
		return AlbumArtUrl;
	}

	public void setAlbumArtUrl(String albumArtUrl) {
		AlbumArtUrl = albumArtUrl;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	public Artist getArtist() {
		return artist;
	}

	public void setArtist(Artist artist) {
		this.artist = artist;
	}

	
}
