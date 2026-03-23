import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingContentProjectionComponent } from './understanding-content-projection.component';

describe('UnderstandingContentProjectionComponent', () => {
  let component: UnderstandingContentProjectionComponent;
  let fixture: ComponentFixture<UnderstandingContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingContentProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
