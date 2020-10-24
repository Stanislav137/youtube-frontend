import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UpdateDataDialogComponent} from './modal/update-data-modal/update-data-dialog.component';
import {AddNewVideoComponent} from './modal/add-new-video-modal/add-new-video.component';
import {
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DeleteVideoComponent} from './modal/delete-video-modal/delete-video.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UpdateDataDialogComponent,
    AddNewVideoComponent,
    DeleteVideoComponent
  ],
  entryComponents: [AppComponent, UpdateDataDialogComponent, AddNewVideoComponent, DeleteVideoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
