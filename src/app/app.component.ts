import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateDataDialogComponent} from './modal/update-data-modal/update-data-dialog.component';
import {AddNewVideoComponent} from './modal/add-new-video-modal/add-new-video.component';
import {DeleteVideoComponent} from './modal/delete-video-modal/delete-video.component';
import {Video} from './model/video';
import {VideoService} from './service/video.service';

export interface DialogData {
  channelId: number;
  videoId: number;
  videoTitle: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  playVideo = false;
  videoUrl: string;
  private localPathToImages = 'assets/images/';
  private localPathToVideos = 'assets/videos/';
  videos: Video[];

  constructor(public dialog: MatDialog, private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {

    this.videoService.getVideos(1)
      .subscribe(
        data => {
          this.videos = [];

          for (let i = 0; i < data.length; i++) {
            this.videos.push({
              videoId: data[i].id,
              title: data[i].title,
              thumbnailUrl: this.localPathToImages + data[i].thumbnailUrl,
              videoUrl: this.localPathToVideos + data[i].videoUrl,
              duration: data[i].duration,
              views: data[i].views,
              uploadDate: data[i].uploadDate
            });
          }
        },
        error => console.error(error));
  }

  openUpdateDataModal(id: number) {
    this.dialog.open(UpdateDataDialogComponent, {
      data: {
        videoId: id
      }
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.fetchData();
    });
  }

  openAddNewVideoModal() {
    this.dialog.open(AddNewVideoComponent, {
      data: {
        channelId: '1'
      }
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.fetchData();
    });
  }

  deleteVideo(id: number, title: string) {
    this.dialog.open(DeleteVideoComponent, {
      data: {
        videoId: id,
        videoTitle: title
      }
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.fetchData();
    });
  }

  showPlayVideo(playVideo: boolean, videoUrl?: string) {
    if (playVideo) {
      this.videoUrl = videoUrl;
    }
    this.playVideo = !this.playVideo;
  }
}
