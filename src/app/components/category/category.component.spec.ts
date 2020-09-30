import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Accordian} from 'src/app/app.models';

import {CategoryComponent} from './category.component';

const mockData: Accordian = {
  CategoyHeading: 'Advertising',
  CategoyId: 11,
  CategoyText:
      'We use plugins to measure and personalize content. These plugins may share content you provide to 3rd party. We recommend you read their privacy policies.',
  ExtraSettings: '{" IsMandatoryUpdated ":true}',
  IsMandatory: false,
  Localization: 'en',
  PluginList: [{
    BlockingEnabled: false,
    ComplianceType: 'Twitter',
    ComplianceTypeID: 55496,
    PluginDomain: 'static.ads-twitter.com',
    cName: 'both'
  }]
};

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({declarations: [CategoryComponent]})
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    component.accordian = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
