import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataPageComponent } from './user-data-page.component';

describe('UserDataPageComponent', () => {
  let component: UserDataPageComponent;
  let fixture: ComponentFixture<UserDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
