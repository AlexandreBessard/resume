import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  template: `
    <img [src]="data.image" alt="Zoomed Image" class="zoomed-image">
  `,
  styles: [`
    .zoomed-image {
      max-width: 80vw;
      max-height: 80vh;
      width: auto;
      height: auto;
    }
  `]
})
export class ImageDialogComponent {

  /*
  @Inject(MAT_DIALOG_DATA) -> used to inject data into the dialog component.
  This line is saying that the data property of the dialog component should be populated with the value passed to the dialog under the image key.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: { image: string }) {}

}
