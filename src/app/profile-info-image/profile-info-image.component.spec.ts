import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoImageComponent } from './profile-info-image.component';

describe('ProfileInfoImageComponent', () => {
  let component: ProfileInfoImageComponent;
  let fixture: ComponentFixture<ProfileInfoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
