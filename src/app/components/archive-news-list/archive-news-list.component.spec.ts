import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveNewsListComponent } from './archive-news-list.component';

describe('ArchiveNewsListComponent', () => {
  let component: ArchiveNewsListComponent;
  let fixture: ComponentFixture<ArchiveNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveNewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
