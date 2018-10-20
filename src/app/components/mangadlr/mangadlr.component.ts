import { Component, OnInit } from '@angular/core';
import { imagesGalleryConf, imagesMangaDLR } from 'src/environments/environment';


@Component({
  selector: 'app-mangadlr',
  templateUrl: './mangadlr.component.html',
  styleUrls: ['./mangadlr.component.css']
})
export class MangadlrComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  get galleryConf() {
    return imagesGalleryConf
  }

  get galleryImages() {
    return imagesMangaDLR
  }

}
