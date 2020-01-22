import { Component, OnInit } from '@angular/core';
import { imagesGalleryConf, imagesKamuy } from 'src/environments/environment';

import { faRedditAlien,faBitbucket,faPatreon } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-kamuy',
  templateUrl: './kamuy.component.html',
  styleUrls: ['./kamuy.component.css']
})
export class KamuyComponent implements OnInit {
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
    return imagesKamuy
  }

}
