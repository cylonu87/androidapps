import { Component, OnInit } from '@angular/core';
import { imagesGalleryConf, imagesAnimeDLR } from 'src/environments/environment';

import { faRedditAlien,faBitbucket,faPatreon } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-animedlr',
  templateUrl: './animedlr.component.html',
  styleUrls: ['./animedlr.component.css']
})
export class AnimedlrComponent implements OnInit {
  constructor() { }

  faRedditAlien = faRedditAlien
  faBitbucket = faBitbucket
  faPatreon = faPatreon

  ngOnInit() {
  }

  get galleryConf() {
    return imagesGalleryConf
  }

  get galleryImages() {
    return imagesAnimeDLR
  }

}
