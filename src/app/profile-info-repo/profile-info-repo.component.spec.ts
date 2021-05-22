import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoRepoComponent } from './profile-info-repo.component';

describe('ProfileInfoRepoComponent', () => {
  let component: ProfileInfoRepoComponent;
  let fixture: ComponentFixture<ProfileInfoRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
