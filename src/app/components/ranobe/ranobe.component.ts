import { Component, OnInit } from '@angular/core';
import { imagesGalleryConf, imagesRanobe } from 'src/environments/environment';

import { faRedditAlien,faBitbucket,faPatreon } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-ranobe',
  templateUrl: './ranobe.component.html',
  styleUrls: ['./ranobe.component.css']
})
export class RanobeComponent implements OnInit {
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
    return imagesRanobe
  }

}
