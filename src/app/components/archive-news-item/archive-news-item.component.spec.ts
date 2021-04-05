import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveNewsItemComponent } from './archive-news-item.component';

describe('ArchiveNewsItemComponent', () => {
  let component: ArchiveNewsItemComponent;
  let fixture: ComponentFixture<ArchiveNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveNewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
