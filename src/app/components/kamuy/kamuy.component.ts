import { Component, OnInit } from '@angular/core';
import { imagesGalleryConf, imagesKamuy } from 'src/environments/environment';


@Component({
  selector: 'app-kamuy',
  templateUrl: './kamuy.component.html',
  styleUrls: ['./kamuy.component.css']
})
export class KamuyComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  get galleryConf() {
    return imagesGalleryConf
  }

  get galleryImages() {
    return imagesKamuy
  }

}
