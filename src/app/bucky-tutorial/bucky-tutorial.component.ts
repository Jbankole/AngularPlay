import { Video } from './video';
import { PlaylistComponent } from './../playlist/playlist.component';
import { BuckyTutorialServiceService } from './../bucky-tutorial-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bucky-tutorial',
  templateUrl: './bucky-tutorial.component.html',
  styleUrls: ['./bucky-tutorial.component.css']
})
export class BuckyTutorialComponent implements OnInit {
  videos:Array<Video>;

  public test:String = "";
  constructor(bTS: BuckyTutorialServiceService) { 
    this.test = bTS.getMainHeading();
    
    this.videos = [
        new Video(1,"The Ringer (Kamikaze Album)","rY8sh9UxErE", "Eminem Kamikaze Album 1",
        `rY8sh9UxErE`),
        new Video(2,"Kamikaze (Kamikaze Album)","D7GEvpjOPmI", "Eminem Kamikaze Album 2",
        null),
        new Video(3,"Fall (Kamikaze Album)","MfTbHITdhEI", "Eminem Kamikaze Album 3",
        `rY8sh9UxErE`
        )
    ]
  }

  ngOnInit() {
  }

}
