import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNewsListComponent } from './feature-news-list.component';

describe('FeatureNewsListComponent', () => {
  let component: FeatureNewsListComponent;
  let fixture: ComponentFixture<FeatureNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureNewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
