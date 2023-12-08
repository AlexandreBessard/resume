import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ImageDialogService {

  constructor(private dialog: MatDialog) {}

  openImageDialog(image: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { image },
      panelClass: 'image-dialog-container',
    });
  }

}
