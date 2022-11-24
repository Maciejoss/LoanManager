import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireFormLoggedComponent } from './inquire-form-logged.component';

describe('InquireFormLoggedComponent', () => {
  let component: InquireFormLoggedComponent;
  let fixture: ComponentFixture<InquireFormLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquireFormLoggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquireFormLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
