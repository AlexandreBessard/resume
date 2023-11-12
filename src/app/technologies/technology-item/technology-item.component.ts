import {Component, Input} from '@angular/core';
import {TechnologyContentModel} from "../technology-content.model";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-technology-item',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.css']
})
export class TechnologyItemComponent {

  @Input()
  technologyContent: TechnologyContentModel;

  constructor(private sanitizer: DomSanitizer) {
    this.technologyContent = new TechnologyContentModel("", "", "");
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
