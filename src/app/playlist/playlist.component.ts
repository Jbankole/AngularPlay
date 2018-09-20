import { Video } from './../bucky-tutorial/video';
import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  inputs: ['videos']
})
export class PlaylistComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  onSelect(vid:Video){
    console.log(JSON.stringify(vid));
    
  }

  getEmbedURL(vid){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+vid.videoCode+'?rel=0');
  }
  ngOnInit() {
  }

}
