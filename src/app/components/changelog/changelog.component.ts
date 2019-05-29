import { Component, OnInit, Input } from '@angular/core';
import { ChangelogService } from 'src/app/services/changelog.service';
import { map, catchError, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {
  @Input('app') app;
  changelog;

  constructor(private changelogService: ChangelogService) { }

  ngOnInit() {

    this.changelogService.getChangelog(this.app)
    .pipe(
      map( (issues: any[]) => {
        let changelog = new Array()

        for(let i = 0; i < issues.length; i++) {
          let tmp = issues[i].body as string
          let tokens = tmp.split("\r\n")
          let changes = new Array()

          for(let j = 0; j < tokens.length; j++) {
            let t = tokens[j].substring(1).trim()
            if(t.length > 0) {
              changes.push(t)
            }
          }

          let version = {
            "version": issues[i].title,
            "changes": changes
          }

          if(changelog.length < 3) {
            changelog.push(version)
          }
        }

        return changelog
      }),
      catchError( (err: HttpErrorResponse) => { 
        return throwError(err.message)
      } )
    )
    .subscribe(
      changelog => this.changelog = changelog,
      error => {
        console.log(error)
      }
    )

  }

}
