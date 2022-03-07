import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRELOADERComponent } from './preloader.component';

describe('PRELOADERComponent', () => {
  let component: PRELOADERComponent;
  let fixture: ComponentFixture<PRELOADERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRELOADERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PRELOADERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
