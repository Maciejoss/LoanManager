import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInquiresPageComponent } from './my-inquires-page.component';

describe('MyInquiresPageComponent', () => {
  let component: MyInquiresPageComponent;
  let fixture: ComponentFixture<MyInquiresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInquiresPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInquiresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
