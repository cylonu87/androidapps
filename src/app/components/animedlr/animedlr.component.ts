import { Component, OnInit } from '@angular/core';
import { imagesGalleryConf, imagesAnimeDLR } from 'src/environments/environment';


@Component({
  selector: 'app-animedlr',
  templateUrl: './animedlr.component.html',
  styleUrls: ['./animedlr.component.css']
})
export class AnimedlrComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  get galleryConf() {
    return imagesGalleryConf
  }

  get galleryImages() {
    return imagesAnimeDLR
  }

}
