import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNewsItemComponent } from './feature-news-item.component';

describe('FeatureNewsItemComponent', () => {
  let component: FeatureNewsItemComponent;
  let fixture: ComponentFixture<FeatureNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureNewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
