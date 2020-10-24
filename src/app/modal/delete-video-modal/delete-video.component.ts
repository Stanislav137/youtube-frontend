import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DialogData} from '../../app.component';
import {VideoService} from '../../service/video.service';

@Component({
  selector: 'app-delete-video',
  templateUrl: './delete-video.component.html',
  styleUrls: ['./delete-video.component.css']
})
export class DeleteVideoComponent implements OnInit {

  videoTitle;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog, private videoService: VideoService) {
    this.videoTitle = data.videoTitle;
  }

  ngOnInit() {
  }

  deleteVideo() {
    this.videoService.deleteVideo(this.data.videoId)
      .subscribe(
        data => {
          this.dialog.closeAll();
        },
        error => {
        });
  }

  closeModal() {
    this.dialog.closeAll();
  }

}
