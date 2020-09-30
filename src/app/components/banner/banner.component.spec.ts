import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NotificationService} from 'src/app/service/notification.service';

import {BannerTopComponent} from '../banner-top/banner-top.component';
import {LoaderComponent} from '../loader/loader.component';

import {BannerComponent} from './banner.component';


describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed
        .configureTestingModule({
          declarations: [BannerComponent, BannerTopComponent, LoaderComponent],
          imports: [HttpClientTestingModule],
          providers: [NotificationService]
        })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make bannerShow false on closeBanner Call', () => {
    component.closeBanner();
    expect(component.bannerShow).toBe(false);
  });
});
