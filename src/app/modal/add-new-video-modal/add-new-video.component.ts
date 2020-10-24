import {Component, Inject, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {VideoService} from '../../service/video.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../../app.component';
import {MatDialog} from '@angular/material/dialog';
import {AddNewVideo} from '../../model/video';

@Component({
  selector: 'app-add-new-video',
  templateUrl: './add-new-video.component.html',
  styleUrls: ['./add-new-video.component.css']
})
export class AddNewVideoComponent implements OnInit {
  videoUrl;
  imgUrl;
  videoName;
  imgName;
  videoSizeError;
  videoDuration;
  date;
  title: string;
  error: boolean;

  constructor(private sanitizer: DomSanitizer, private videoService: VideoService, @Inject(MAT_DIALOG_DATA) public data: DialogData
            , public dialog: MatDialog) {
    this.date = new Date();
  }

  readVideoUrl(event: any) {
    const files = event.target.files;
    this.videoName = files[0].name;

    if (files && files[0]) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(files[0]));
    }
  }

  readImgUrl(event: any) {
    const files = event.target.files;
    this.imgName = files[0].name;

    if (files && files[0]) {
      this.imgUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(files[0]));
    }
  }

  getDuration(e) {
    const duration = e.target.duration;
    this.videoDuration = duration;
    this.videoSizeError = duration > 120;
  }

  getVideoDuration(): string {
    const minutes = this.videoDuration / 60;
    const seconds = this.videoDuration % 60;

    return Math.floor(minutes) + ':' + (seconds ? Math.floor(seconds) : '');
  }

  ngOnInit(): void {
  }

  saveVideo() {
    const request: AddNewVideo = {
      duration: this.getVideoDuration(),
      videoUrl: this.videoName,
      thumbnailUrl: this.imgName,
      title: this.title
    };

    this.videoService.addNewVideo(request, this.data.channelId)
      .subscribe(
        data => {
          this.error = false;
          this.dialog.closeAll();
        },
        error => {
          console.error(error);
          this.error = true;
        });
  }
}
