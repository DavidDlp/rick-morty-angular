import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersDetailComponent } from './chapters-detail.component';

describe('ChaptersDetailComponent', () => {
  let component: ChaptersDetailComponent;
  let fixture: ComponentFixture<ChaptersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
