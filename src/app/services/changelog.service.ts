import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangelogService {

  constructor(private httpClient: HttpClient) { 
  }

  getChangelog(app: string) {
    let url = "https://api.github.com/repos/cylonu87/androidapps/issues?state=closed&creator=cylonu87&labels="+app
    return this.httpClient.get(url, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "cylonu87"
      }
    })
  }

}
