import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDisplayComponent } from './offers-display.component';

describe('OffersDisplayComponent', () => {
  let component: OffersDisplayComponent;
  let fixture: ComponentFixture<OffersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
