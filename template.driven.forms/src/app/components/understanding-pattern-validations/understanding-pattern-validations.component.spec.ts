import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingPatternValidationsComponent } from './understanding-pattern-validations.component';

describe('UnderstandingPatternValidationsComponent', () => {
  let component: UnderstandingPatternValidationsComponent;
  let fixture: ComponentFixture<UnderstandingPatternValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingPatternValidationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingPatternValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
