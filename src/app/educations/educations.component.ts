import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageDialogService} from '../image-dialog.service';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.css'
})
export class EducationsComponent {

  constructor(private imageDialogService: ImageDialogService) {}

  openImageCenter(imageUrl: string): void {
    this.imageDialogService.openImageDialog(imageUrl);
  }

}
