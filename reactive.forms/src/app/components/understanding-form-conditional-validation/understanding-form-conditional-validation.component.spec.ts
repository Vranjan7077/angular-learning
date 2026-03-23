import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormConditionalValidationComponent } from './understanding-form-conditional-validation.component';

describe('UnderstandingFormConditionalValidationComponent', () => {
  let component: UnderstandingFormConditionalValidationComponent;
  let fixture: ComponentFixture<UnderstandingFormConditionalValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormConditionalValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormConditionalValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
