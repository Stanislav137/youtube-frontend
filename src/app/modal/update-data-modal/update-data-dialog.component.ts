import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DialogData} from '../../app.component';
import {VideoService} from '../../service/video.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: './update-data-dialog.component.html',
  styleUrls: ['./update-data-dialog.component.css']
})
export class UpdateDataDialogComponent implements OnInit {

  title;
  imgUrl;
  imgName;

  constructor(private sanitizer: DomSanitizer, @Inject(MAT_DIALOG_DATA) public data: DialogData, private videoService: VideoService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  readImgUrl(event: any) {
    const files = event.target.files;
    this.imgName = files[0].name;

    if (files && files[0]) {
      this.imgUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(files[0]));
    }
  }

  updateVideo() {
    const request = {
      thumbnailUrl: this.imgName,
      title: this.title
    };

    this.videoService.updateVideo(this.data.videoId, request).subscribe(() => {
      this.dialog.closeAll();
    });
  }

}
