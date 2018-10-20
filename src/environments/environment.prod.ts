import { GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

export const environment = {
  production: true
};

export function getApiUrl(user: string, repo: string) {
  return "https://api.bitbucket.org/2.0/repositories/" + user + "/" + repo + "/downloads?pagelen=100&fields=values.name,values.downloads,values.created_on,values.size,next"
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
    url: "https://i.imgur.com/widssrZ.png", 
    thumbnailUrl: "https://i.imgur.com/widssrZt.png",
    altText: 'AnimeDLR-1', 
    title: 'AnimeDLR-1',
    extUrl: "https://i.imgur.com/widssrZ.png"
  },
  {
    url: "https://i.imgur.com/CpmkRhu.png", 
    thumbnailUrl: "https://i.imgur.com/CpmkRhut.png",
    altText: 'AnimeDLR-2', 
    title: 'AnimeDLR-2',
    extUrl: "https://i.imgur.com/CpmkRhu.png"
  },
  {
    url: "https://i.imgur.com/v5rUert.png", 
    thumbnailUrl: "https://i.imgur.com/v5rUertt.png",
    altText: 'AnimeDLR-3', 
    title: 'AnimeDLR-3',
    extUrl: "https://i.imgur.com/v5rUert.png"
  },
  {
    url: "https://i.imgur.com/IxpyPzl.png", 
    thumbnailUrl: "https://i.imgur.com/IxpyPzlt.png",
    altText: 'AnimeDLR-4', 
    title: 'AnimeDLR-4',
    extUrl: "https://i.imgur.com/IxpyPzl.png"
  },
  {
    url: "https://i.imgur.com/X6gVls3.png", 
    thumbnailUrl: "https://i.imgur.com/X6gVls3t.png",
    altText: 'AnimeDLR-5', 
    title: 'AnimeDLR-5',
    extUrl: "https://i.imgur.com/X6gVls3.png"
  },
  {
    url: "https://i.imgur.com/zz9xCg4.png", 
    thumbnailUrl: "https://i.imgur.com/zz9xCg4t.png",
    altText: 'AnimeDLR-6', 
    title: 'AnimeDLR-6',
    extUrl: "https://i.imgur.com/zz9xCg4.png"
  },
  {
    url: "https://i.imgur.com/ICWMh7h.png", 
    thumbnailUrl: "https://i.imgur.com/ICWMh7ht.png",
    altText: 'AnimeDLR-7', 
    title: 'AnimeDLR-7',
    extUrl: "https://i.imgur.com/ICWMh7h.png"
  }
]

export const imagesMangaDLR: GALLERY_IMAGE[] = [
  {
    url: "https://i.imgur.com/ICTcvuK.png", 
    thumbnailUrl: "https://i.imgur.com/ICTcvuKt.png",
    altText: 'MangaDLR-1', 
    title: 'MangaDLR-1',
    extUrl: "https://i.imgur.com/ICTcvuK.png"
  },
  {
    url: "https://i.imgur.com/RCz36Vw.png", 
    thumbnailUrl: "https://i.imgur.com/RCz36Vwt.png",
    altText: 'MangaDLR-2', 
    title: 'MangaDLR-2',
    extUrl: "https://i.imgur.com/RCz36Vw.png"
  },
  {
    url: "https://i.imgur.com/oxj58vJ.png", 
    thumbnailUrl: "https://i.imgur.com/oxj58vJt.png",
    altText: 'MangaDLR-3', 
    title: 'MangaDLR-3',
    extUrl: "https://i.imgur.com/oxj58vJ.png"
  },
  {
    url: "https://i.imgur.com/sR9F1Hc.png", 
    thumbnailUrl: "https://i.imgur.com/sR9F1Hct.png",
    altText: 'MangaDLR-4', 
    title: 'MangaDLR-4',
    extUrl: "https://i.imgur.com/sR9F1Hc.png"
  },
  {
    url: "https://i.imgur.com/zdYg3li.png", 
    thumbnailUrl: "https://i.imgur.com/zdYg3lit.png",
    altText: 'MangaDLR-5', 
    title: 'MangaDLR-5',
    extUrl: "https://i.imgur.com/zdYg3li.png"
  },
  {
    url: "https://i.imgur.com/xDpQKaV.png", 
    thumbnailUrl: "https://i.imgur.com/xDpQKaVt.png",
    altText: 'MangaDLR-6', 
    title: 'MangaDLR-6',
    extUrl: "https://i.imgur.com/xDpQKaV.png"
  },
  {
    url: "https://i.imgur.com/N7djecJ.png", 
    thumbnailUrl: "https://i.imgur.com/N7djecJt.png",
    altText: 'MangaDLR-7', 
    title: 'MangaDLR-7',
    extUrl: "https://i.imgur.com/N7djecJ.png"
  },
  {
    url: "https://i.imgur.com/gPJ48hL.png", 
    thumbnailUrl: "https://i.imgur.com/gPJ48hLt.png",
    altText: 'MangaDLR-8', 
    title: 'MangaDLR-8',
    extUrl: "https://i.imgur.com/gPJ48hL.png"
  }
]

export const imagesKamuy: GALLERY_IMAGE[] = [
  {
    url: "https://i.imgur.com/cwABOnd.png", 
    thumbnailUrl: "https://i.imgur.com/cwABOndt.png",
    altText: 'Kamuy-1', 
    title: 'Kamuy-1',
    extUrl: "https://i.imgur.com/cwABOnd.png"
  },
  {
    url: "https://i.imgur.com/7R8lyrT.png", 
    thumbnailUrl: "https://i.imgur.com/7R8lyrTt.png",
    altText: 'Kamuy-2', 
    title: 'Kamuy-2',
    extUrl: "https://i.imgur.com/7R8lyrT.png"
  },
  {
    url: "https://i.imgur.com/dU7VyNI.png", 
    thumbnailUrl: "https://i.imgur.com/dU7VyNIt.png",
    altText: 'Kamuy-3', 
    title: 'Kamuy-3',
    extUrl: "https://i.imgur.com/dU7VyNI.png"
  },
  {
    url: "https://i.imgur.com/QBDXxnK.png", 
    thumbnailUrl: "https://i.imgur.com/QBDXxnKt.png",
    altText: 'Kamuy-4', 
    title: 'Kamuy-4',
    extUrl: "https://i.imgur.com/QBDXxnK.png"
  },
  {
    url: "https://i.imgur.com/RcjDA7q.png", 
    thumbnailUrl: "https://i.imgur.com/RcjDA7qt.png",
    altText: 'Kamuy-5', 
    title: 'Kamuy-5',
    extUrl: "https://i.imgur.com/RcjDA7q.png"
  },
  {
    url: "https://i.imgur.com/0zkiRvb.png", 
    thumbnailUrl: "https://i.imgur.com/0zkiRvbt.png",
    altText: 'Kamuy-6', 
    title: 'Kamuy-6',
    extUrl: "https://i.imgur.com/0zkiRvb.png"
  },
  {
    url: "https://i.imgur.com/czyNeYA.png", 
    thumbnailUrl: "https://i.imgur.com/czyNeYAt.png",
    altText: 'Kamuy-7', 
    title: 'Kamuy-7',
    extUrl: "https://i.imgur.com/czyNeYA.png"
  },
  {
    url: "https://i.imgur.com/KXR7GKz.png", 
    thumbnailUrl: "https://i.imgur.com/KXR7GKzt.png",
    altText: 'Kamuy-8', 
    title: 'Kamuy-8',
    extUrl: "https://i.imgur.com/KXR7GKz.png"
  }
]

export const imagesRanobe: GALLERY_IMAGE[] = [
  {
    url: "https://i.imgur.com/5YkvRUb.png", 
    thumbnailUrl: "https://i.imgur.com/5YkvRUbt.png",
    altText: 'Ranobe-1', 
    title: 'Ranobe-1',
    extUrl: "https://i.imgur.com/5YkvRUb.png"
  },
  {
    url: "https://i.imgur.com/AQ4Ss2D.png", 
    thumbnailUrl: "https://i.imgur.com/AQ4Ss2Dt.png",
    altText: 'Ranobe-2', 
    title: 'Ranobe-2',
    extUrl: "https://i.imgur.com/AQ4Ss2D.png"
  },
  {
    url: "https://i.imgur.com/rihMCHI.png", 
    thumbnailUrl: "https://i.imgur.com/rihMCHIt.png",
    altText: 'Ranobe-3', 
    title: 'Ranobe-3',
    extUrl: "https://i.imgur.com/rihMCHI.png"
  },
  {
    url: "https://i.imgur.com/ipjP1qB.png", 
    thumbnailUrl: "https://i.imgur.com/ipjP1qBt.png",
    altText: 'Ranobe-4', 
    title: 'Ranobe-4',
    extUrl: "https://i.imgur.com/ipjP1qB.png"
  }
]