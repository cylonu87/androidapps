// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

export const environment = {
  production: false
};

export function getApiUrl(user: string, repo: string) {
  return "http://localhost/" + user + "-" + repo + "-download.json"
}

export const imagesGalleryConf: GALLERY_CONF = {
  imageOffset: '0px',
  backdropColor: '#FFFFFF',
  showDeleteControl: false,
  showCloseControl: false,
  showImageTitle: true,
  showThumbnails:true,
  inline:true
}

export const imagesAnimeDLR: GALLERY_IMAGE[] = [
  {
    url: "http://localhost/a/CpmkRhu.png", 
    thumbnailUrl: "http://localhost/a/CpmkRhut.png.jpeg",
    altText: '1', 
    title: '1111',
    extUrl: "http://localhost/a/CpmkRhu.png",
  },
  {
    url: "http://localhost/a/ICWMh7h.png", 
    thumbnailUrl: "http://localhost/a/ICWMh7ht.png.jpeg",
    altText: '2', 
    title: '2222',
  },
  {
    url: "http://localhost/a/IxpyPzl.png", 
    thumbnailUrl: "http://localhost/a/IxpyPzlt.png.jpeg",
    altText: '3', 
    title: '3333',
  },
  {
    url: "http://localhost/a/v5rUert.png", 
    thumbnailUrl: "http://localhost/a/v5rUertt.png.jpeg",
    altText: '3', 
    title: '3333',
  },
  {
    url: "http://localhost/a/widssrZ.png", 
    thumbnailUrl: "http://localhost/a/widssrZt.png.jpeg",
    altText: '3', 
    title: '3333',
  },
  {
    url: "http://localhost/a/X6gVls3.png", 
    thumbnailUrl: "http://localhost/a/X6gVls3t.png.jpeg",
    altText: '3', 
    title: '3333',
  },
  {
    url: "http://localhost/a/zz9xCg4.png", 
    thumbnailUrl: "http://localhost/a/zz9xCg4t.png.jpeg",
    altText: '3', 
    title: '3333',
  }
]

export const imagesMangaDLR = imagesAnimeDLR
export const imagesKamuy = imagesAnimeDLR
export const imagesRanobe = imagesAnimeDLR


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
