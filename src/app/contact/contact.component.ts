import { Component } from '@angular/core';
import {ImageDialogService} from '../image-dialog.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private imageDialogService: ImageDialogService) {}

  openImageInCenter(imageUrl: string): void {
    this.imageDialogService.openImageDialog(imageUrl);
  }

}
