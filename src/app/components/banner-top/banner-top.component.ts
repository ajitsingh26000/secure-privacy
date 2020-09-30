import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-banner-top',
  templateUrl: './banner-top.component.html',
  styleUrls: ['./banner-top.component.scss']
})
export class BannerTopComponent {
  @Output() closeBanner = new EventEmitter();
}
