import {Component} from '@angular/core';

import {Observable} from 'rxjs';

import {Banner} from 'src/app/app.models';
import {NotificationService} from 'src/app/service/notification.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  banner$: Observable<Banner> = this.notificationS.getBanner();
  bannerShow = true;
  constructor(public notificationS: NotificationService) {}

  closeBanner(): void {
    this.bannerShow = false;
  }
}
