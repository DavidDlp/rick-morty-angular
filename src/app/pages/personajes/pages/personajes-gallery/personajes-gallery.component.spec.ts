import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesGalleryComponent } from './personajes-gallery.component';

describe('PersonajesGalleryComponent', () => {
  let component: PersonajesGalleryComponent;
  let fixture: ComponentFixture<PersonajesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
