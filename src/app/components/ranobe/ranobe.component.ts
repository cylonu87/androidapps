import { Component, OnInit } from '@angular/core';
import { imagesGalleryConf, imagesRanobe } from 'src/environments/environment';


@Component({
  selector: 'app-ranobe',
  templateUrl: './ranobe.component.html',
  styleUrls: ['./ranobe.component.css']
})
export class RanobeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  get galleryConf() {
    return imagesGalleryConf
  }

  get galleryImages() {
    return imagesRanobe
  }

}
