import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apikey ="def19c0c07fb4183b7f5b6d81def5dea"
  baseUrl = "https://newsapi.org/v2"

  constructor(private http: HttpClient) { }

  getSources(){
    return this.http.get(`${this.baseUrl}/sources?apikey=${this.apikey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apikey=${this.apikey}`)
  }

}

