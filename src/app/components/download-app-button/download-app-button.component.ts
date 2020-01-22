import { Component, OnInit, Input } from '@angular/core';
import { DownloadAppService } from '../../services/download-app.service';
import { catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Downloads } from '../../models/downloads';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'download-app-button',
  templateUrl: './download-app-button.component.html',
  styleUrls: ['./download-app-button.component.css'],
  animations: [
    trigger ('fadeIn', [
      state('hidden', style({opacity: 0})),
      state('shown', style({opacity: 1})),
      transition('hidden => shown', [
        animate(1000)
      ])
    ])
  ]
})
export class DownloadAppButtonComponent implements OnInit {
  @Input() user: string;
  @Input() repo: string;
  @Input() app: string;
  @Input() flavor: string = "full";
  @Input() showFlavor: boolean = false;
  @Input() cssClass: string;
  downloadInfo = null;
  visible = false

  faDownload = faDownload

  constructor(private downloadAppService: DownloadAppService) { }

  ngOnInit() {
    this.downloadAppService.getDownloadInfo(this.user, this.repo)
    .pipe(
      catchError( (err: HttpErrorResponse) => { 
        return throwError(err.message)
      } )
    )
    .subscribe(
      infos => {
        this.handleInfos(infos);
      },
      error => {
        console.log(error)
      }
    )
  }

  private handleInfos(infos: Downloads) {
    if(infos.values) {
      for(let download of infos.values) {
        if(!this.downloadInfo && download.name.startsWith(this.app + "-")) {
           let splitted = download.name.split("-")

           if(splitted.length >= 3 && splitted[0] === this.app && splitted[2] === this.flavor) {
            let version = splitted[1]
            let size = download.size
            let downloadsCount = download.downloads
            let name = download.name

            this.downloadInfo = {
              file: "https://bitbucket.org/" + this.user + "/" + this.repo + "/downloads/" + name,
              version: version,
              size: size,
              downloads: downloadsCount
            }
            this.visible = true
           }
        }

      }
    }
  }

}
