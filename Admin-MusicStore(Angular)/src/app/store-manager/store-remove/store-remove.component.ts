import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AlbumService } from '../../service/album-service';
import { Album } from '../../domain/album';

@Component({
  selector: 'app-store-remove',
  templateUrl: './store-remove.component.html',
  styleUrls: ['./store-remove.component.css']
})
export class StoreRemoveComponent implements OnInit {
  albumId : number;
  title : String;

  constructor(private albumService : AlbumService
    ,private router: ActivatedRoute
    ,private route: Router) { }

  ngOnInit() {
    this.albumId = this.router.snapshot.params['id'];
    this.title = this.router.snapshot.params['title'];
  }

  onDelete(){
    this.albumService.deleteAlbum(this.albumId).subscribe((error) => console.log(error));
    this.route.navigate(['/']);
  }
}
