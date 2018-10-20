import { Injectable } from '@angular/core';
import { getApiUrl } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Downloads } from '../models/downloads';

@Injectable({
  providedIn: 'root'
})
export class DownloadAppService {

  constructor(private http: HttpClient) {
  }

  getDownloadInfo(user: string, repo: string) {
    let url = getApiUrl(user, repo)
    return this.http.get<Downloads>(url)
  }
}
