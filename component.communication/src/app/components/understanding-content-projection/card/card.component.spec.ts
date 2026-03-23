import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingContentProjectionCardComponent } from './card.component';

describe('UnderstandingContentProjectionCardComponent', () => {
  let component: UnderstandingContentProjectionCardComponent;
  let fixture: ComponentFixture<UnderstandingContentProjectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingContentProjectionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingContentProjectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
