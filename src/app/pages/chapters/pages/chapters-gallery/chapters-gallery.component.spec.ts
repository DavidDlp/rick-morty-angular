import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersGalleryComponent } from './chapters-gallery.component';

describe('ChaptersGalleryComponent', () => {
  let component: ChaptersGalleryComponent;
  let fixture: ComponentFixture<ChaptersGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
