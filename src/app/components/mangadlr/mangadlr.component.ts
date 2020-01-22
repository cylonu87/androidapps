import { Component, OnInit } from '@angular/core';
import { imagesGalleryConf, imagesMangaDLR } from 'src/environments/environment';

import { faRedditAlien,faBitbucket,faPatreon } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-mangadlr',
  templateUrl: './mangadlr.component.html',
  styleUrls: ['./mangadlr.component.css']
})
export class MangadlrComponent implements OnInit {
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
    return imagesMangaDLR
  }

}
