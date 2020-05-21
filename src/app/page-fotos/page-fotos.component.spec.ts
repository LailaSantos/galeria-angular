import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFotosComponent } from './page-fotos.component';

describe('PageFotosComponent', () => {
  let component: PageFotosComponent;
  let fixture: ComponentFixture<PageFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
