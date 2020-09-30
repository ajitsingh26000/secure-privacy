import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BannerTopComponent} from './components/banner-top/banner-top.component';
import {BannerComponent} from './components/banner/banner.component';
import {CategoryComponent} from './components/category/category.component';
import {LoaderComponent} from './components/loader/loader.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed
        .configureTestingModule({
          declarations: [
            AppComponent,
            CategoryComponent,
            BannerComponent,
            BannerTopComponent,
            LoaderComponent,
          ],
          imports: [HttpClientTestingModule],
        })
        .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'secure-privacy'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('secure-privacy');
  });
});
