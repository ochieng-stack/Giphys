import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=jXgxtfwSwom2P18Po2BpFSjLguu2UTDf&limit=25&rating=g`);
  }
}
