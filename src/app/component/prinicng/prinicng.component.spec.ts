import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRINICNGComponent } from './prinicng.component';

describe('PRINICNGComponent', () => {
  let component: PRINICNGComponent;
  let fixture: ComponentFixture<PRINICNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRINICNGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PRINICNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
