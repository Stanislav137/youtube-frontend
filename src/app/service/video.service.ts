import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AddNewVideo, UpdateVideo} from '../model/video';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private baseUrl = '/api/v1';

  constructor(private http: HttpClient) {
  }

  addNewVideo(request: AddNewVideo, channelId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/saveVideo/${channelId}`, request);
  }

  getVideos(channelId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getVideos/${channelId}`);
  }

  deleteVideo(videoId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteVideo/${videoId}`);
  }

  updateVideo(videoId: number, request: UpdateVideo): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateVideo/${videoId}`, request);
  }
}
