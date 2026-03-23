import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostDetailPageComponent } from './user-post-detail-page.component';

describe('UserPostDetailPageComponent', () => {
  let component: UserPostDetailPageComponent;
  let fixture: ComponentFixture<UserPostDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPostDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPostDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
